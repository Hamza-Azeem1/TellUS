import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/solid';
import logo from "../assets/logo.png";

const ProjectFilter = () => {
    const [selectedOption, setSelectedOption] = useState('all');

    const projects = [
        { id: 1, title: 'Project 1', category: 'appDevelopment', image: logo, link: 'https://example.com/app_project' },
        { id: 2, title: 'Project 2', category: 'webDevelopment', image: logo, link: 'https://example.com/web_project' },
        { id: 3, title: 'Project 3', category: 'appDevelopment', image: logo, link: 'https://example.com/another_app_project' },
        { id: 4, title: 'Project 4', category: 'webDevelopment', image: logo, link: 'https://example.com/another_app_project' },
        { id: 5, title: 'Project 5', category: 'appDevelopment', image: logo, link: 'https://example.com/another_app_project' },
        // Add more projects as needed
    ];

    const filteredProjects = selectedOption === 'all'
        ? projects
        : projects.filter(project => project.category === selectedOption);

    return (
        <div className="bg-gray-400 p-8 text-gray-800">
            <h1 className="text-4xl mb-4 text-center text-white">Featured Projects</h1>

            <div className="flex justify-center space-x-4 mb-4">
                <button
                    className={`px-4 py-2 ${selectedOption === 'all' ? 'bg-blue-500' : 'bg-gray-600'} rounded text-white`}
                    onClick={() => setSelectedOption('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 ${selectedOption === 'appDevelopment' ? 'bg-blue-500' : 'bg-gray-600'} rounded text-white`}
                    onClick={() => setSelectedOption('appDevelopment')}
                >
                    App Development
                </button>
                <button
                    className={`px-4 py-2 ${selectedOption === 'webDevelopment' ? 'bg-blue-500' : 'bg-gray-600'} rounded text-white`}
                    onClick={() => setSelectedOption('webDevelopment')}
                >
                    Web Development
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                {filteredProjects.map(project => (
                    <div key={project.id} className="bg-gray-500 p-6 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:shadow-md transition duration-300 relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="mb-4 rounded-md object-cover object-center w-full h-52 transition-transform transform hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-700"
                            >
                                <LinkIcon className="h-4 w-4" />
                            </a>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFilter;
