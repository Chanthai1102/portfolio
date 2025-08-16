import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveHandler = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
    }, []);

    // detect hover on any element with data-cursor-hover
    useEffect(() => {
        const hoverElements = document.querySelectorAll("[data-cursor-hover]");
        const enter = () => setIsHovering(true);
        const leave = () => setIsHovering(false);

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => {
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50"
            style={{
                top: pos.y,
                left: pos.x,
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="relative w-16 h-16 flex items-center justify-center">
                {/* Center dot */}
                <div className="w-2 h-2 bg-white rounded-full" />

                {/* Orbiting arrows (only when not hovering) */}
                {!isHovering && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Up chevron */}
                        <svg className="absolute top-0 w-3 h-3 text-white" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>

                        {/* Down chevron */}
                        <svg className="absolute bottom-0 w-3 h-3 text-white" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>

                        {/* Left chevron */}
                        <svg className="absolute left-0 w-3 h-3 text-white" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>

                        {/* Right chevron */}
                        <svg className="absolute right-0 w-3 h-3 text-white" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CustomCursor;
