import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const mousePos = useRef({ x: -100, y: -100 });
    const dotPos = useRef({ x: -100, y: -100 });
    const framePos = useRef({ x: -100, y: -100 });
    const currentSize = useRef({ width: 64, height: 64 });
    const hoveredElementRef = useRef(null);
    const isHoveringRef = useRef(false);

    const containerX = useMotionValue(-100);
    const containerY = useMotionValue(-100);
    const containerWidth = useMotionValue(64);
    const containerHeight = useMotionValue(64);
    const dotX = useMotionValue(-100);
    const dotY = useMotionValue(-100);

    const lerp = (a, b, n) => a + (b - a) * n;
    const dotLerp = 0.38;
    const frameLerp = 0.3;
    const sizeLerp = 0.25;

    useEffect(() => {
        const handlePointerMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // Passive pointer events keep scrolling and cursor updates independent.
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    useEffect(() => {
        let animationFrame = 0;

        const animate = () => {
            const hoveredElement = hoveredElementRef.current;

            let frameTargetX = mousePos.current.x;
            let frameTargetY = mousePos.current.y;
            let targetWidth = 64;
            let targetHeight = 64;

            if (hoveredElement && hoveredElement.isConnected) {
                const rect = hoveredElement.getBoundingClientRect();
                frameTargetX = rect.left + rect.width / 2;
                frameTargetY = rect.top + rect.height / 2;
                targetWidth = rect.width;
                targetHeight = rect.height;
            } else {
                hoveredElementRef.current = null;
                if (isHoveringRef.current) {
                    isHoveringRef.current = false;
                    setIsHovering(false);
                }
            }

            dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, dotLerp);
            dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, dotLerp);
            framePos.current.x = lerp(framePos.current.x, frameTargetX, frameLerp);
            framePos.current.y = lerp(framePos.current.y, frameTargetY, frameLerp);
            currentSize.current.width = lerp(currentSize.current.width, targetWidth, sizeLerp);
            currentSize.current.height = lerp(currentSize.current.height, targetHeight, sizeLerp);

            dotX.set(dotPos.current.x);
            dotY.set(dotPos.current.y);

            containerX.set(framePos.current.x);
            containerY.set(framePos.current.y);
            containerWidth.set(currentSize.current.width);
            containerHeight.set(currentSize.current.height);

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, [containerHeight, containerWidth, containerX, containerY, dotX, dotY]);

    useEffect(() => {
        const handlePointerOver = (event) => {
            const target = event.target instanceof Element
                ? event.target.closest("[data-cursor-hover]")
                : null;

            if (target) {
                hoveredElementRef.current = target;
                if (!isHoveringRef.current) {
                    isHoveringRef.current = true;
                    setIsHovering(true);
                }
            }
        };

        const handlePointerOut = (event) => {
            const active = hoveredElementRef.current;
            if (!active) {
                return;
            }

            const relatedTarget = event.relatedTarget;
            if (!(relatedTarget instanceof Node) || !active.contains(relatedTarget)) {
                hoveredElementRef.current = null;
                if (isHoveringRef.current) {
                    isHoveringRef.current = false;
                    setIsHovering(false);
                }
            }
        };

        document.addEventListener("pointerover", handlePointerOver);
        document.addEventListener("pointerout", handlePointerOut);

        return () => {
            document.removeEventListener("pointerover", handlePointerOver);
            document.removeEventListener("pointerout", handlePointerOut);
        };
    }, []);

    const rotatorVariants = {
        default: { rotate: 360 },
        hover: { rotate: 0 },
    };

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-black dark:bg-white will-change-transform"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Container */}
            <motion.div
                style={{
                    x: containerX,
                    y: containerY,
                    width: containerWidth,
                    height: containerHeight,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="fixed top-0 left-0 will-change-transform"
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