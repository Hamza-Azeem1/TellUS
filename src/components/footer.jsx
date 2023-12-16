import { FaFacebook, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center mb-8">
                    <div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                        <img src={logo} alt="Company Logo" className="w-16 h-16 object-contain" />
                        <p className="italic md:text-left mt-2 md:mt-0">Build your projects with us just Tell Us.</p>
                    </div>
                    <div className="w-full md:w-3/4 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <div className="mb-8 md:w-1/4">
                                <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2">
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#">Our Services</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-8 md:w-1/4">
                                <h2 className="text-lg font-semibold mb-2">Our Projects</h2>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2">
                                        <a href="#">App Development</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#">UI/UX Development</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/4">
                                <h2 className="text-lg font-semibold mb-2">Contact Info</h2>
                                <p className="mb-2">Email: your@email.com</p>
                                <p className="mb-2">Phone: +123 456 7890</p>
                                <div className="flex justify-center md:justify-start">
                                    <a href="#" className="mr-2">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" className="mr-2">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm">
                        <FaCopyright className="inline mr-1" />
                        2023 - Tell Us. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
