import {ABOUT_TEXT, ABOUT_TEXT_CO} from "../constants/index.jsx";
import profilePic from "../assets/profile.jpg"
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {motion} from "framer-motion";
import {useState} from "react";
const About = () => {
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };
    return (
        <div className="container p-4 pb-4 pt-5 lg:mb-16">
            <div className="flex flex-wrap justify-center lg:flex-row-reverse">
                <div className="w-full md:w-2/4 lg:w-1/4">
                    <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex justify-center lg:p-8 md:mt-4">
                        <img src={profilePic} className="border
                        border-stone-900 rounded-full"/>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 pr-6 mt-4">
                    <div className="w-full flex flex-col items-start lg:items-start mt-6">
                        <h2 className="pb-2 text-2xl tracking-tight text-neutral-900 dark:text-gray-200 lg:text-4xl font-bold">
                            About me<span className="text-blue-500">.</span>
                        </h2>
                        <p className="w-full text-neutral-900 dark:text-gray-200 md:py-6 text-xl leading-relaxed
                        tracking-tight text-left md:text-left md:pr-12">
                            {ABOUT_TEXT}
                        </p>
                        <p className={`w-full text-neutral-900 dark:text-gray-200 lg:block text-xl leading-relaxed 
                        tracking-tight text-start md:text-left md:pr-12 ${isHidden ? 'hidden' : ''}`}>
                            {ABOUT_TEXT_CO}
                        </p>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            whileDrag={{scale: 0.9, rotate: 10}}
                            drag
                            onClick={toggleHidden}
                            className="mt-5 lg:hidden inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            {isHidden ? "See More" : "See Less"}
                            <div className="w-3 h-3 ms-1 rtl:rotate-180 flex items-center">
                                { isHidden ? <ExpandMoreIcon/> : <ExpandLessIcon/> }
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
