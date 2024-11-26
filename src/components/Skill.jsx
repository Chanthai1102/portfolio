import { motion } from "framer-motion";
import {DATA_SKILL} from "../constants/index.jsx";
const skill = () => {
    return (
        <div className="container pb-4 pt-5 lg:mb-36">
            <div className="w-full p-4 lg:m-3/4 md:w-5/6">
                <h2 className="mb-4 text-2xl text-neutral-900 dark:text-gray-200 tracking-tight lg:text-4xl font-bold">
                    Skills<span className="text-blue-500">.</span>
                </h2>
                <p className="w-full text-neutral-900 dark:text-gray-200 mb-4 lg:mb-5 md:py-4 text-xl leading-relaxed
                        tracking-tight md:text-left md:pr-12 font-extralight">
                    Technologies and Tools
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6">
                    {DATA_SKILL.map((skill, index) => (
                        <motion.div
                            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                            key={index}
                            className="flex flex-col items-center justify-between py-2 px-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition w-auto"
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="w-12 h-12 mb-2"
                            />
                            <p className="text-xs font-extralight text-center whitespace-nowrap overflow-hidden text-ellipsis">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default skill;