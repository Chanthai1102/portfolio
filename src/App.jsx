import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import { useEffect, useState } from "react";
import Project from "./components/Project.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

const CURSOR_CLASS = "custom-cursor-enabled";
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const MOBILE_OR_TABLET_REGEX = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;

const App = () => {
    const [theme, setTheme] = useState("dark");
    const [isDesktopPointer, setIsDesktopPointer] = useState(false);

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(POINTER_QUERY);

        const isTouchIpad =
            /iPad/i.test(window.navigator.userAgent) ||
            (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);

        const isMobileOrTablet =
            MOBILE_OR_TABLET_REGEX.test(window.navigator.userAgent) || isTouchIpad;

        const updatePointerMode = (entry) => {
            const hasFinePointer = entry.matches;
            setIsDesktopPointer(hasFinePointer && !isMobileOrTablet);
        };

        updatePointerMode(mediaQuery);

        if (typeof mediaQuery.addEventListener === "function") {
            mediaQuery.addEventListener("change", updatePointerMode);
            return () => mediaQuery.removeEventListener("change", updatePointerMode);
        }

        mediaQuery.addListener(updatePointerMode);
        return () => mediaQuery.removeListener(updatePointerMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle(CURSOR_CLASS, isDesktopPointer);
        return () => document.documentElement.classList.remove(CURSOR_CLASS);
    }, [isDesktopPointer]);

    return (

        <div
            className={`w-full overflow-x-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
                 [background-size:16px_16px] dark:bg-[size:20px_20px] 
                 dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[#000000]`}
        >
            {isDesktopPointer && <CustomCursor/>}
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
                <div className="container mx-auto lg:p-10">
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default App;