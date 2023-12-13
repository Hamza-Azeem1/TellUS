import { SearchIcon, CogIcon, PencilIcon, CodeIcon, LightningBoltIcon, HandIcon } from '@heroicons/react/solid';

const ProcessFlow = () => {
    const processes = [
        { name: 'Discovery', icon: <SearchIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
        { name: 'Framework', icon: <CogIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
        { name: 'Prototyping', icon: <PencilIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
        { name: 'Development', icon: <CodeIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
        { name: 'Deployment', icon: <LightningBoltIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
        { name: 'Support', icon: <HandIcon className="h-12 w-12 mb-2 text-blue-400" />, color: 'bg-gray-900' },
    ];

    return (
        <div className="bg-gray-500 text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Our Development Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
                        >
                            <div className="flex items-center justify-center mb-4">{process.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{process.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessFlow;
