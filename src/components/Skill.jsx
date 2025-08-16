import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA_SKILL } from "../constants/index.jsx";

const Skill = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="container pb-4 pt-5 lg:mb-36 relative overflow-hidden">
            <div className="w-full p-4 lg:m-3/4 md:w-5/6">
                <h2 className="mb-4 text-2xl text-neutral-900 dark:text-gray-200 tracking-tight lg:text-4xl font-bold">
                    Skills<span className="text-blue-500">.</span>
                </h2>
                <p className="w-full text-neutral-900 dark:text-gray-200 mb-4 lg:mb-5 md:py-4 text-xl leading-relaxed
                        tracking-tight md:text-left md:pr-12 font-extralight">
                    Technologies and Tools
                </p>

                {/* Background image animation */}
                <AnimatePresence>
                    {hoveredSkill && (
                        <motion.div
                            key={hoveredSkill.name}
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                        >
                            <motion.img
                                src={hoveredSkill.icon}
                                alt={`${hoveredSkill.name} background`}
                                className="w-[200px] sm:w-[280px] md:w-[300px] lg:w-[400px] h-auto object-contain"
                                animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Skills grid */}
                <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
                    {DATA_SKILL.map((skill, index) => (
                        <motion.div
                            data-cursor-hover
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                            key={index}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="flex flex-col items-center justify-between py-2 px-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition w-auto cursor-pointer"
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="w-12 h-12 mb-2"
                            />
                            <p className="text-xs font-extralight text-center whitespace-nowrap overflow-hidden text-ellipsis">
                                {skill.name}
                            </p>
                        </motion.div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
