import { FaBriefcase, FaBullseye, FaUsers, FaEye } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
            <div className="max-w-md text-center md:mr-8 mb-8 md:mb-0">
                <div className="mb-8 flex items-start justify-start">
                    <div className="mr-4">
                        <FaBriefcase className="text-5xl text-blue-500" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-2">Company Overview</h3>
                        <p className="text-gray-300">
                            At TellUs, we are passionate about turning ideas into exceptional digital experiences. As a dynamic and innovative company, we specialize in a range of services, including mobile app development, web applications, software solutions, and cutting-edge UI/UX design.
                        </p>
                    </div>
                </div>

                <div className="flex items-start justify-start">
                    <div className="mr-4">
                        <FaBullseye className="text-5xl text-green-500" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-300">
                            At the heart of TellUs is a commitment to empowering businesses and individuals through transformative technology solutions. We strive to create digital products that not only meet but exceed the expectations of our clients, driving success in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-md text-center md:ml-8">
                <div className="mb-8 flex items-start justify-start">
                    <div className="mr-4">
                        <FaUsers className="text-5xl text-purple-500" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-2">Our Team</h3>
                        <p className="text-gray-300">
                            TellUs is proud to be home to a team of skilled and dedicated professionals. Our diverse talent pool includes experienced developers, creative designers, and innovative thinkers who collaborate to deliver solutions that make a difference.
                        </p>
                    </div>
                </div>

                <div className="flex items-start justify-start">
                    <div className="mr-4">
                        <FaEye className="text-5xl text-orange-500" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-300">
                            As we look to the future, TellUs remains committed to pushing boundaries and setting new industry standards. We aspire to be the go-to partner for those seeking unparalleled digital solutions that propel them towards success. Discover the limitless possibilities with TellUs, where innovation meets excellence in every line of code and pixel of design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
