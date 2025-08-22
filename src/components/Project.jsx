// Project.jsx
import ecomerce from '../../public/Images/ecommerce.png'
import { motion, useMotionValue } from "framer-motion";
import { FaGitlab } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack microservices-based shop built with Spring Boot, Kafka, PostgreSQL, and React.",
        image: ecomerce,
        gitlab: "https://gitlab.com/your-username/ecommerce-platform",
        demo: "https://your-demo.com"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with React.js and TailwindCSS.",
        image: ecomerce,
        gitlab: "https://gitlab.com/your-username/portfolio"
    },
    {
        title: "Chat App",
        description: "A real-time chat application using Node.js, Express, and WebSockets.",
        image: ecomerce,
        gitlab: "https://gitlab.com/your-username/chat-app",
        demo: "https://chat-demo.com"
    }
];



const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2 // Step-by-step delay
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, x: 100, filter: "blur(4px)" }, // Start off to the right
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } // Smooth cubic-bezier
    }
};

const Project = () => {
    return (
        <div className="container pb-16 lg:mb-36 relative overflow-hidden">
            <div className="w-full p-4 lg:m-3/4 md:w-5/6">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-4 text-2xl text-neutral-900 dark:text-gray-200 tracking-tight lg:text-4xl font-bold"
                >
                    Projects<span className="text-blue-500">.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full text-neutral-900 dark:text-gray-200 mb-8 text-lg leading-relaxed tracking-tight md:text-left md:pr-12 font-extralight"
                >
                    My recent projects hosted on GitLab
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:-translate-y-2"
                            variants={cardVariants}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-gray-100">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex gap-4">
                                    {project.gitlab && (
                                        <a
                                            data-cursor-hover
                                            href={project.gitlab}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow hover:from-orange-300 hover:to-orange-500 hover:scale-105 transition-all duration-300"
                                        >
                                            <FaGitlab/> GitLab
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            data-cursor-hover
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-500 text-white rounded-lg shadow hover:from-blue-300 hover:to-teal-400 hover:scale-105 transition-all duration-300"
                                        >
                                            <FiExternalLink/> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Project;
