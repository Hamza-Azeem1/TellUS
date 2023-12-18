import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicId = import.meta.env.VITE_REACT_APP_PUBLIC_ID;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, publicId)
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success('Email sent successfully!', {
                        position: toast.POSITION.TOP_CENTER,
                        onClose: () => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        },
                    });
                },
                (error) => {
                    console.log(error.text);
                    toast.error('Failed to send email. Please try again.', {
                        position: toast.POSITION.TOP_CENTER,
                        onClose: () => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        },
                    });
                }
            );
    };

    return (
        <div className="flex flex-wrap bg-gray-900">
            <div className="w-full lg:w-1/2 text-left mt-20 max-w-xl px-6">
                <h1 className="font-bold text-2xl text-white mt-12 mb-8">Contact Us</h1>
                <ul className="font-semi-bold">
                    <li className="flex items-center mb-2">
                        <div className="flex items-center">
                            <FaEnvelope className="text-2xl text-gray-500 dark:text-gray-400 mr-4" />
                            <span className="text-lg text-white">Email: info@example.com</span>
                        </div>
                    </li>
                    <li className="flex items-center mb-6">
                        <div className="flex items-center">
                            <FaPhone className="text-2xl text-gray-500 dark:text-gray-400 mr-4" />
                            <span className="text-lg text-white">Phone: +1 (123) 456-7890</span>
                        </div>
                    </li>

                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 text-2xl">
                            <FaLinkedin />
                        </a>
                    </div>
                </ul>

                <p className="text-gray-200 mt-5">
                    Have a question or want to say hello? Feel free to reach out to our team.
                </p>
            </div>

            <div className="w-full lg:w-1/2 mt-10">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-xl mx-auto m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <div className="flex items-center mb-8">
                        <p className="font-bold text-white text-2xl">SAY HELLO!</p>
                    </div>
                    <div className="text-gray-200 font-lg">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-200 rounded-md shadow-sm text-md"
                            id="name"
                            name="name"
                            aria-label="Name"
                            placeholder='Your Name'
                            required
                        />
                    </div>
                    <div className="text-gray-200 font-lg mt-5">
                        <label htmlFor="email">Email id:</label>
                        <input
                            type="email"
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-200 rounded-md shadow-sm text-md"
                            id="email"
                            name="email"
                            aria-label="Email"
                            placeholder='example@domain.com'
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label className="text-gray-200 block text-lg text-dark mb-2" htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-200 rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            rows="6"
                            placeholder='Write your message here'
                            aria-label="Message"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="cursor-pointer flex items-center justify-center font-general-medium w-full lg:w-1/2 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
                        >
                            <FaPaperPlane size={25} className="mr-2" />
                            Send message
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;