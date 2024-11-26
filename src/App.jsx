import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import {useEffect, useState} from "react";


const App = () => {
    const [theme, setTheme] = useState('light'); // Initialize with 'light'

    // Toggle theme between 'light' and 'dark'
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Apply the theme to the root element
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div
            className={`w-full overflow-x-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                        [background-size:16px_16px] dark:bg-[size:20px_20px] 
                        dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[#000000]`}
        >
            <div
                className="text-neutral-300 antialiased selection:bg-cyan-300
                           selection:text-cyan-900 flex flex-col items-center justify-center"
            >
                <div className="container mx-auto px-8">
                    <Navbar changeTheme={changeTheme} currentTheme={theme} />
                </div>
                <div className="my-20">
                    <Hero />
                </div>
                <div className="lg:p-10">
                    <About />
                </div>
                <div className="container mx-auto lg:p-10">
                    <Skill />
                </div>
                <div className="container mx-auto lg:p-10">
                    <ExperienceSection />
                </div>
            </div>
        </div>
    );
};

export default App;