import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaUser, FaEnvelopeSquare, FaMobileAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
            {/* Contact Us Header */}
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

            <div className="max-w-full flex flex-col items-center md:flex-row md:justify-between">
                {/* Left Side: Contact Information */}
                <div className="mb-8 md:mr-8 text-center md:text-left">
                    {/* Contact Information */}
                    <div className="mb-4 text-left">
                        <p className="flex items-center mb-2">
                            <FaEnvelope className="mr-2" />
                            Email: info@example.com
                        </p>
                        <p className="flex items-center mb-2">
                            <FaPhone className="mr-2" />
                            Phone: +1 (123) 456-7890
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Compliment */}
                    <p className="text-gray-300">
                        Have a question or want to say hello? Feel free to reach out to our team.
                    </p>
                </div>

                {/* Right Side: Contact Form */}
                <div className="max-w-md text-center md:ml-8">
                    {/* Contact Form Header */}
                    <h3 className="text-2xl font-bold mb-4">Say Hello</h3>

                    {/* Contact Form */}
                    <form className="text-left">
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">
                                <FaUser className="mr-2 inline-block" />
                                Your Name
                            </label>
                            <input type="text" className="w-full bg-gray-800 text-white p-2 rounded" placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">
                                <FaEnvelopeSquare className="mr-2 inline-block" />
                                Email
                            </label>
                            <input type="email" className="w-full bg-gray-800 text-white p-2 rounded" placeholder="example@example.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">
                                <FaMobileAlt className="mr-2 inline-block" />
                                Phone
                            </label>
                            <input type="tel" className="w-full bg-gray-800 text-white p-2 rounded" placeholder="+1 (123) 456-7890" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300 mb-2">
                                <FaPaperPlane className="mr-2 inline-block" />
                                Message
                            </label>
                            <textarea className="w-full bg-gray-800 text-white p-2 rounded" rows="4" placeholder="Your message here"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
