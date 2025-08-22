import {DATA_EDUCATION} from "../constants/index.jsx";
import {useEffect, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {DATA_EXPERIENCE_SE} from "../constants/index.jsx";

const ExperienceSection = () => {
    const [expandedActivities, setExpandedActivities] = useState({});

    const toggleActivities = (id) => {
        setExpandedActivities((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container w-full flex flex-col lg:flex-row pb-4 pt-5 lg:mb-36">
            {DATA_EXPERIENCE_SE.map((experience_se, parentIndex) => (
                <div
                    key={`experience-section-${parentIndex}`}
                    data-aos={experience_se.animation}
                    data-aos-duration="2500"
                    className="w-full lg:w-1/2 flex flex-col p-5"
                >
                    <h2 className="pb-2 text-neutral-900 dark:text-gray-200 text-2xl tracking-tight lg:text-4xl font-bold">
                        {experience_se.type}
                        <span className="text-blue-500"> .</span>
                    </h2>
                    <ol className="relative border-neutral-700 border-s border-gray-200 dark:border-gray-700">
                        {experience_se.data.map((experience, childIndex) => {
                            const uniqueId = `${parentIndex}-${childIndex}`; // Generate a unique ID
                            return (
                                <li key={`experience-${uniqueId}`} className="mb-10 ms-4">
                                    <div className="absolute bg-neutral-700 w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {experience.time}
                                    </time>
                                    <h3 className="text-2lg font-semibold text-gray-900 dark:text-white">
                                        {experience.place}
                                    </h3>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {experience.position}
                                    </h3>
                                    <p className="mb-4 pr-8 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {experience.description}
                                    </p>
                                    <div className="mb-4 ">
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                            Activities
                                        </h2>
                                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                            {/* Initial Two Activities */}
                                            {experience.activities.slice(0, 2).map((activity, activityIndex) => (
                                                <li
                                                    key={`activity-${uniqueId}-${activityIndex}`}
                                                    className="mb-2"
                                                >
                                                    {activity}
                                                </li>
                                            ))}
                                            <AnimatePresence>
                                                {(expandedActivities[uniqueId] ||
                                                        experience.activities.length <= 2) &&
                                                    experience.activities
                                                        .slice(2)
                                                        .map((activity, activityIndex) => (
                                                            <motion.li
                                                                key={`expanded-activity-${uniqueId}-${activityIndex}`}
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="mb-2"
                                                            >
                                                                {activity}
                                                            </motion.li>
                                                        ))}
                                            </AnimatePresence>
                                        </ul>
                                    </div>
                                    <AnimatePresence>
                                        {expandedActivities[uniqueId] && (
                                            <motion.div
                                                key={`technologies-section-${uniqueId}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                className="mb-5 pr-2 md:pr-4"
                                            >
                                                <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                                                    Technologies
                                                </h2>
                                                <div className="grid grid-col md:grid-cols-6 lg:grid-cols-6 md:gap-1 ">
                                                    {experience.technologies.map(
                                                        (technology, techIndex) => (
                                                            <div
                                                                key={`technology-${uniqueId}-${techIndex}`}
                                                                className="flex p-1 lg:justify-start items-center"
                                                            >
                                                                <motion.img
                                                                    src={technology.icon}
                                                                    className="w-5 h-5"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    exit={{ scale: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                />
                                                                <motion.p
                                                                    className="text-xs lg:text-xs ml-1 font-light text-neutral-900 dark:text-gray-200"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    exit={{ opacity: 0, x: 10 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    {technology.name}
                                                                </motion.p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <motion.button
                                        data-cursor-hover
                                        key={`toggle-button-${uniqueId}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => toggleActivities(uniqueId)}
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                    >
                                        {expandedActivities[uniqueId] ? "See less" : "See more"}
                                        <div className="w-3 h-3 ms-1 rtl:rotate-180 flex items-center">
                                            {expandedActivities[uniqueId] ? (
                                                <ExpandLessIcon />
                                            ) : (
                                                <ExpandMoreIcon />
                                            )}
                                        </div>
                                    </motion.button>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            ))}
        </div>
    );
};

export default ExperienceSection;
