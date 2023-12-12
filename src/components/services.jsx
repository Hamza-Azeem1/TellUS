import { CodeIcon, GlobeAltIcon, ColorSwatchIcon, BriefcaseIcon, CogIcon, DesktopComputerIcon } from "@heroicons/react/solid";

const ServiceSection = () => {
    const services = [
        {
            title: "App Development",
            description: "We create stunning mobile applications tailored to your needs.",
            icon: <CodeIcon className="h-12 w-12 text-blue-500" />,
        },
        {
            title: "Web Development",
            description: "Build robust and responsive websites for your business or project.",
            icon: <GlobeAltIcon className="h-12 w-12 text-green-500" />,
        },
        {
            title: "UI/UX Development",
            description: "Craft beautiful and user-friendly interfaces for your applications.",
            icon: <ColorSwatchIcon className="h-12 w-12 text-purple-500" />,
        },
        {
            title: "B2B Solutions",
            description: "Tailored business-to-business solutions to enhance your operations.",
            icon: <BriefcaseIcon className="h-12 w-12 text-yellow-500" />,
        },
        {
            title: "Code Maintenance",
            description: "Ensure the smooth functioning of your software with our maintenance services.",
            icon: <CogIcon className="h-12 w-12 text-red-500" />,
        },
        {
            title: "Software Development",
            description: "Comprehensive software development services to bring your ideas to life.",
            icon: <DesktopComputerIcon className="h-12 w-12 text-indigo-500" />,
        },
    ];

    return (
        <div className="bg-gray-900 text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
                        >
                            <div className="flex items-center justify-center mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
