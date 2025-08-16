import { IoDocumentTextOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import CountUp from 'react-countup';
const Hero = () => {
    const startDate = new Date("2024-07-01");
    const currentDate = new Date();

    // Calculate the difference in milliseconds and convert to days
    const daysDifference = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24)
    );
    return (
        <div className="space-y-4 max-w-3xl flex flex-col items-center md:p-4">
            <button
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition flex items-center gap-1">
                Hello !
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <motion.span
                    animate={{rotate: [0, 15, -15, 0], scale: [1, 1.2, 1]}}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                >
                    ⚡
                </motion.span>
                I'm Chanthai Thy
            </button>
            <div
                className=" text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug text-center px-3 md:px-5">
                <div className="lg:pb-2 flex gap-3 items-center justify-center">
                    <h1 className="text-neutral-800 dark:text-white">Experienced</h1> <span
                    className="text-blue-600">full-stack </span><br/>
                </div>
                <div className="lg:mb-2">
                    <span className="text-gray-400">Developer Specializing in</span> <br/>
                </div>
                <span className="text-blue-600">
                <ReactTypingEffect
                    text={["Back-End Systems"]}
                    speed={100}
                    eraseSpeed={50}
                />
            </span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between text-white py-4">
                <div className="flex items-center justify-between space-y-1 px-2 gap-2">
                <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
                    <CountUp start={0} end={daysDifference} duration={2.75}
                             className="text-sm md:text-base lg:text-base"/>
                </span>
                    <span className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">Day of experience</span>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>

                <div className="flex items-center justify-between space-y-1 px-2 gap-2">
                <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
                    <CountUp start={0} end={100} duration={2.75} className="text-sm md:text-base lg:text-base"/>K
                </span>
                    <span
                        className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">Project of code written</span>
                </div>

                <div className="w-px h-12 bg-gray-700"></div>

                <div className="flex items-center justify-between space-y-1 px-2 gap-2">
                <span className="text-sm md:text-base font-normal bg-neutral-800 py-2 px-2 rounded-xl">
                    <CountUp start={0} end={100} duration={2.75} className="text-base"/>
                </span>
                    <span
                        className="text-xs md:text-sm text-neutral-900 dark:text-gray-200">Cups of coffee consumed</span>
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