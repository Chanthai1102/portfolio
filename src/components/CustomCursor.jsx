import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const mousePos = useRef({ x: -100, y: -100 });
    const [hoveredElement, setHoveredElement] = useState(null);

    // Base Motion Values
    const containerX = useMotionValue(-100);
    const containerY = useMotionValue(-100);
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);
    const containerWidth = useMotionValue(64);
    const containerHeight = useMotionValue(64);

    // Springs
    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
    const springContainerX = useSpring(containerX, springConfig);
    const springContainerY = useSpring(containerY, springConfig);
    const springDotX = useSpring(dotX, springConfig);
    const springDotY = useSpring(dotY, springConfig);
    const springWidth = useSpring(containerWidth, springConfig);
    const springHeight = useSpring(containerHeight, springConfig);

    // Lerp helper
    const lerp = (a, b, n) => a + (b - a) * n;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            dotX.set(e.clientX);
            dotY.set(e.clientY);

            if (!hoveredElement) {
                containerX.set(e.clientX);
                containerY.set(e.clientY);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hoveredElement, containerX, containerY, dotX, dotY]);

    useEffect(() => {
        let animationFrame;

        const animate = () => {
            if (hoveredElement) {
                const rect = hoveredElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Check if cursor is still inside the element
                const { x, y } = mousePos.current;
                const inside =
                    x >= rect.left &&
                    x <= rect.right &&
                    y >= rect.top &&
                    y <= rect.bottom;

                if (!inside) {
                    // Force exit hover if cursor left due to animation
                    setHoveredElement(null);
                } else {
                    // Smooth follow element
                    containerX.set(lerp(containerX.get(), centerX, 0.15));
                    containerY.set(lerp(containerY.get(), centerY, 0.15));
                    containerWidth.set(lerp(containerWidth.get(), rect.width, 0.15));
                    containerHeight.set(lerp(containerHeight.get(), rect.height, 0.15));
                }
            } else {
                // Smooth reset
                containerWidth.set(lerp(containerWidth.get(), 64, 0.15));
                containerHeight.set(lerp(containerHeight.get(), 64, 0.15));
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, [hoveredElement, containerX, containerY, containerWidth, containerHeight]);

    // Attach hover listeners
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

    const isHovering = hoveredElement !== null;

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {/* Dot */}
            <motion.div
                className="absolute w-2 h-2 rounded-full bg-black dark:bg-white"
                style={{
                    top: springDotY,
                    left: springDotX,
                    x: "-50%",
                    y: "-50%",
                }}
            />

            {/* Container */}
            <motion.div
                style={{
                    top: springContainerY,
                    left: springContainerX,
                    width: springWidth,
                    height: springHeight,
                    x: "-50%",
                    y: "-50%",
                }}
                className="absolute"
            >
                <motion.div
                    variants={rotatorVariants}
                    animate={isHovering ? "hover" : "default"}
                    transition={
                        isHovering
                            ? { duration: 0.2 }
                            : { duration: 4, repeat: Infinity, ease: "linear" }
                    }
                    className="relative w-full h-full"
                >
                    {/* Corners */}
                    <svg className="absolute top-0 left-0 w-4 h-4 text-black dark:text-white"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="10 6 6 6 6 10" />
                    </svg>
                    <svg className="absolute top-0 right-0 w-4 h-4 text-black dark:text-white"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="14 6 18 6 18 10" />
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-4 h-4 text-black dark:text-white"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 14 6 18 10 18" />
                    </svg>
                    <svg className="absolute bottom-0 right-0 w-4 h-4 text-black dark:text-white"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 14 18 18 14 18" />
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CustomCursor;