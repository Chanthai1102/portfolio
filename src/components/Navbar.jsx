import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {MdOutlineNightsStay, MdSunny} from "react-icons/md";


// eslint-disable-next-line react/prop-types
const Navbar = ({ changeTheme, currentTheme }) => {
    return (
        <nav className="flex flex-wrap items-center justify-between md:p-2 md:mb-6">
            <div className="flex text-black dark:text-white items-center text-2xl">
                <button onClick={changeTheme}>
                    {currentTheme === 'dark' ? <MdSunny /> : <MdOutlineNightsStay />}
                </button>
            </div>
            <div className="mx-2 my-6 text-black dark:text-white flex items-center justify-center gap-3 text-2xl md:m-8">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    );
};

export default Navbar;