import { IoDocumentTextOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import CountUp from 'react-countup';
import {useState} from "react";
const Hero = () => {
    const startDate = new Date("2024-07-01");
    const currentDate = new Date();
    const [hovered, setHovered] = useState(false);

    // Calculate the difference in milliseconds and convert to days
    const daysDifference = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24)
    );
    return (
        <div className="space-y-4 max-w-3xl flex flex-col items-center md:p-4">
            <motion.button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition flex items-center gap-1 overflow-hidden"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
            >
                Hello !
                <motion.span
                    animate={
                        hovered
                            ? {
                                rotate: [0, 20, -20, 0],
                                scale: [1, 1.4, 1.2, 1],
                                textShadow: [
                                    "0px 0px 0px #fff",
                                    "0px 0px 6px #facc15",
                                    "0px 0px 12px #f59e0b",
                                    "0px 0px 0px #fff",
                                ],
                                color: ["#facc15", "#fbbf24", "#f59e0b", "#facc15"],
                            }
                            : {rotate: 0, scale: 1, textShadow: "0px 0px 0px #fff"}
                    }
                    transition={{
                        repeat: hovered ? Infinity : 0,
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                >
                    ⚡
                </motion.span>
                I'm Chanthai Thy

                {/* Glow effect background when hover */}
                {hovered && (
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{opacity: 0}}
                        animate={{opacity: [0, 0.4, 0.2, 0], scale: [1, 1.5, 1.2, 1]}}
                        transition={{repeat: Infinity, duration: 1.5, ease: "easeOut"}}
                        style={{background: "radial-gradient(circle, #facc15, transparent)"}}
                    />
                )}
            </motion.button>
            <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug text-center px-3 md:px-5"
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                {/* First line */}
                <motion.div
                    className="lg:pb-2 flex gap-3 items-center justify-center"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.3, duration: 0.8}}
                >
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 via-gray-500 to-gray-700 dark:from-white dark:via-gray-200 dark:to-gray-400">
                        Experienced
                    </h1>
                    <motion.span
                        className="text-blue-600"
                        whileHover={{scale: 1.1, rotate: -2}}
                        transition={{type: "spring", stiffness: 200}}
                    >
                        full-stack
                    </motion.span>
                </motion.div>

                {/* Second line */}
                <motion.div
                    className="lg:mb-2"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6, duration: 0.8}}
                >
                    <span className="text-gray-400">Developer Specializing in</span>
                </motion.div>

                {/* Typing effect */}
                <motion.span
                    className="text-blue-600 block mt-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1, duration: 1}}
                >
                    <ReactTypingEffect
                        text={[
                            "Back-End Systems",
                            "API Development",
                            "Cloud Solutions",
                            "Database Design",
                        ]}
                        speed={100}
                        eraseSpeed={50}
                        typingDelay={500}
                    />
                </motion.span>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center justify-between text-white py-4">

                {/* Days of experience */}
                <div
                    className="flex items-center justify-between space-y-1 px-2 gap-2"
                    onMouseEnter={() => setHovered("days")}
                    onMouseLeave={() => setHovered(null)}
                >
                <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
                  {hovered === "days" ? (
                      <CountUp start={0} end={daysDifference} duration={2.75}/>
                  ) : (
                      daysDifference
                  )}
                </span>
                    <span className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">
                  Day of experience
                </span>
                </div>

                <div className="w-px h-12 bg-gray-700"></div>

                {/* Projects of code written */}
                <div
                    className="flex items-center justify-between space-y-1 px-2 gap-2"
                    onMouseEnter={() => setHovered("projects")}
                    onMouseLeave={() => setHovered(null)}
                >
                <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
                  {hovered === "projects" ? (
                      <CountUp start={0} end={100} duration={2.75}/>
                  ) : (
                      "100"
                  )}
                    K
                </span>
                    <span className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">
                  Project of code written
                </span>
                </div>

                <div className="w-px h-12 bg-gray-700"></div>

                {/* Cups of coffee consumed */}
                <div
                    className="flex items-center justify-between space-y-1 px-2 gap-2"
                    onMouseEnter={() => setHovered("coffee")}
                    onMouseLeave={() => setHovered(null)}
                >
        <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
          {hovered === "coffee" ? (
              <CountUp start={0} end={100} duration={2.75}/>
          ) : (
              "100"
          )}
        </span>
                    <span className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">
          Cups of coffee consumed
        </span>
                </div>
            </div>


            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <a
                    href="https://github.com"
                    className="text-sm bg-neutral-700 text-white dark:bg-white dark:text-black py-2 px-6 rounded-3xl lg:text-lg font-normal hover:bg-gray-100 transition flex justify-between gap-1"
                >
                    <IoDocumentTextOutline className="text-lg lg:text-2xl"/>
                    Resume
                </a>
                <button
                    className="text-sm text-white bg-neutral-700 dark:bg-white dark:text-black py-2 px-6 rounded-3xl lg:text-lg font-normal hover:bg-gray-100 transition flex justify-between gap-1">
                    <BiMessageRoundedDetail className="text-lg lg:text-2xl"/>
                    Contact
                </button>
            </div>
        </div>
    )
}
export default Hero