import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

type NavBarProps = {
    fixed?: boolean;
};

const NavBar = ({ fixed = false }: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const isAboutActive = location.pathname.startsWith("/about");

    const getNavLinkClass = (isActive: boolean) => {
        return isActive
            ? "text-[#0f1720] bg-white px-3 py-2 text-sm font-medium relative after:bg-white rounded-lg"
            : "text-white hover:text-gray-500 px-3 py-2 text-sm font-medium relative transition-all duration-300";
    };

    return (
        <nav className={`border top-0 left-0 right-0 z-50 px-6 bg-[#0f1720]/40 backdrop-blur-sm mt-2 mx-2 rounded-2xl
        ${fixed ? "fixed" : "relative"}
    `}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">

                    {/* Logo (Left) */}
                    <div className="shrink-0 flex items-center w-22">
                        {/* <NavLink to="/">
              <img
                src={logo}
                alt="YB Logo"
                className="h-10 w-auto rounded-lg hover:border border-white"
              />
            </NavLink> */}
                        <HashLink smooth to="/#home">
                            <img
                                src={logo}
                                alt="YB Logo"
                                className="h-10 w-auto rounded-lg hover:border border-white"
                            />
                        </HashLink>
                    </div>

                    {/* Links (Center) */}
                    <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
                        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Home
                        </NavLink>
                        {/* <NavLink to="/about-fr" className={({ isActive }) => getNavLinkClass(isActive)}>
                            About
                        </NavLink> */}
                        <NavLink to="/about-fr" className={() =>
                            isAboutActive
                                ? "text-[#0f1720] bg-white px-3 py-2 text-sm font-medium rounded-lg"
                                : "text-white hover:text-gray-500 px-3 py-2 text-sm font-medium transition-all duration-300"
                        }>
                            About
                        </NavLink>
                        <NavLink to="/skills" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Skills
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Projects
                        </NavLink>
                    </div>

                    {/* Button (Right) */}
                    <div className="hidden md:flex justify-end">
                        <HashLink smooth to="/#contact">
                            <Button className="bg-white text-black cursor-pointer hover:text-white hover:bg-black transition-all duration-300">
                                Contact
                            </Button>
                        </HashLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none cursor-pointer"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-600 ease-in-out 
          rounded-lg ${menuOpen ? "max-h-96" : "max-h-0"}`}
                >
                    <div className="flex flex-col space-y-2 mt-2 pb-4 border-t pt-4">

                        <NavLink
                            to="/"
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about-fr"
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            onClick={() => setMenuOpen(false)}
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => getNavLinkClass(isActive)}
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </NavLink>
                        <HashLink
                            smooth
                            to="/#contact"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Button className="bg-white text-black cursor-pointer hover:text-white hover:bg-black transition-all duration-300 w-full">
                                Contact
                            </Button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
