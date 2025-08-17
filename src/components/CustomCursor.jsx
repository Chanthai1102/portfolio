import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const mousePos = useRef({ x: -100, y: -100 });
    const [hoveredElement, setHoveredElement] = useState(null);

    // --- Base Motion Values ---
    const containerX = useMotionValue(-100);
    const containerY = useMotionValue(-100);
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);
    const containerWidth = useMotionValue(64);
    const containerHeight = useMotionValue(64);

    // --- The key change: Re-introducing springs for the smooth follow-motion ---
    const springConfig = { damping: 30, stiffness: 200 }; // A soft, fluid spring like the video
    const springContainerX = useSpring(containerX, springConfig);
    const springContainerY = useSpring(containerY, springConfig);
    const springDotX = useSpring(dotX, springConfig);
    const springDotY = useSpring(dotY, springConfig);
    const springWidth = useSpring(containerWidth, springConfig);
    const springHeight = useSpring(containerHeight, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            // The dot always gets the new mouse position
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            // The container only follows when not "locked on" to a target
            if (!hoveredElement) {
                containerX.set(e.clientX);
                containerY.set(e.clientY);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hoveredElement, containerX, containerY, dotX, dotY]);

    const isHovering = hoveredElement !== null;
    const rect = hoveredElement?.getBoundingClientRect();

    // The animation logic is now much simpler. We just set the target values,
    // and the useSpring hooks will automatically create the smooth animation.
    useEffect(() => {
        if (isHovering && rect) {
            // Set the target for the hover state
            containerX.set(rect.left);
            containerY.set(rect.top);
            containerWidth.set(rect.width);
            containerHeight.set(rect.height);
        } else {
            // Set the target for the default state
            containerWidth.set(64);
            containerHeight.set(64);
            // The mousemove handler provides the x/y target
        }
    }, [isHovering, rect, containerX, containerY, containerWidth, containerHeight]);

    // ... (useEffect for finding elements is unchanged)
    useEffect(() => {
        const handleMouseEnter = (e) => setHoveredElement(e.currentTarget);
        const handleMouseLeave = () => setHoveredElement(null);
        const updateHoverables = () => {
            document.querySelectorAll("[data-cursor-hover]").forEach((el) => {
                if (!el.dataset.cursorListenerAttached) {
                    el.addEventListener("mouseenter", handleMouseEnter);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.dataset.cursorListenerAttached = "true";
                }
            });
        };
        updateHoverables();
        const observer = new MutationObserver(updateHoverables);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    const rotatorVariants = {
        default: { rotate: 360 },
        hover: { rotate: 0 },
    };

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {/* The dot now uses spring values for smooth tracking */}
            <motion.div
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                    top: springDotY,
                    left: springDotX,
                    x: "-50%",
                    y: "-50%",
                }}
            />

            {/* The container also uses spring values */}
            <motion.div
                style={{
                    top: springContainerY,
                    left: springContainerX,
                    width: springWidth,
                    height: springHeight,
                    x: isHovering ? "0%" : "-50%",
                    y: isHovering ? "0%" : "-50%",
                }}
                className="absolute"
            >
                <motion.div
                    variants={rotatorVariants}
                    animate={isHovering ? "hover" : "default"}
                    transition={isHovering ? { duration: 0.1 } : { duration: 4, repeat: Infinity, ease: "linear" }}
                    className="relative w-full h-full"
                >
                    <svg className="absolute top-0 left-0 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="10 6 6 6 6 10" /></svg>
                    <svg className="absolute top-0 right-0 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="14 6 18 6 18 10" /></svg>
                    <svg className="absolute bottom-0 left-0 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 14 6 18 10 18" /></svg>
                    <svg className="absolute bottom-0 right-0 w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 14 18 18 14 18" /></svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CustomCursor;