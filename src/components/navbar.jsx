import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import logo from "../assets/logo.png";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="app">
            <nav className="bg-gray-800 h-16">
                <div className="w-full mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <img src={logo} alt="Logo" className="h-12" style={{ margin: "6px", padding: 0 }} />
                        </div>
                        {/* secondary */}
                        <div className="flex gap-6">
                            {/* Mobile navigation toggle */}
                            <div className="lg:hidden flex items-center mx-6">
                                <button onClick={() => setToggleMenu(!toggleMenu)}>
                                    <MenuIcon className="h-8 text-white" />
                                </button>
                            </div>
                        </div>
                        {/* primary */}
                        <div className="hidden lg:flex gap-8 mx-10">
                            <a href="#" className="text-white hover:text-gray-300">
                                Home
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                About us
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                Services
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                Portfolio
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-gray-800 text-black hover:text-gray-700">
                                Home
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                About us
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                Services
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                Portfolio
                            </a>
                            <a href="#" className="text-black hover:text-gray-700">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
