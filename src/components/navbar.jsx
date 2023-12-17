import { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = toggleMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggleMenu]);

    return (
        <div className="app">
            <nav className="bg-gray-800 h-16">
                <div className="w-full mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <img src={logo} alt="Logo" className="h-12" style={{ margin: "6px", padding: 0 }} />
                        </div>
                        <div className="flex gap-6">
                            <div className="lg:hidden flex items-center mx-6">
                                <button onClick={() => setToggleMenu(!toggleMenu)}>
                                    <MenuIcon className="h-8 text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:flex gap-8 mx-10">
                            <Link to="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About us
                            </Link>
                            <Link to="/services" className="text-white hover:text-gray-300">
                                Services
                            </Link>
                            <Link to="/portfolio" className="text-white hover:text-gray-300">
                                Portfolio
                            </Link>
                            <Link to="/contact" className="text-white hover:text-gray-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-wider">
                            <Link to="/" className="border-l-4 border-gray-800 text-black hover:text-gray-700">
                                Home
                            </Link>
                            <Link to="/about" className="text-black hover:text-gray-700">
                                About us
                            </Link>
                            <Link to="/services" className="text-black hover:text-gray-700">
                                Services
                            </Link>
                            <Link to="/portfolio" className="text-black hover:text-gray-700">
                                Portfolio
                            </Link>
                            <Link to="/contact" className="text-black hover:text-gray-700">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
