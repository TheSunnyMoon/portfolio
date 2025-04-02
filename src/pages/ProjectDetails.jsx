import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock project data (in a real app, this might come from an API)
const projectsData = [
    {
        id: '1',
        title: 'Shellmate',
        description: "ShellMate is a lightweight, fast, and fully customizable companion shell for Windows, designed to boost productivity and streamline your daily workflow. Born from the need for a more personal and efficient command-line experience, ShellMate offers a modern alternative to traditional terminals, combining simplicity with powerful features. At its core, ShellMate replaces the default window behavior with a sleek, borderless interface that blends seamlessly into your desktop environment. Its clean UI emphasizes clarity and focus, removing visual clutter while maintaining full functionality. Whether you're executing custom commands, automating repetitive tasks, or simply navigating your system more intuitively, ShellMate is built to adapt to your needs. One of ShellMate’s standout features is its support for personalized commands. Instead of relying on long, hard-to-remember inputs, users can define their own shortcuts to frequently used operations, dramatically reducing time spent on routine tasks. This customization empowers both beginners and advanced users to shape their terminal experience around their unique workflow. With its minimal resource usage and fast launch times, ShellMate stays out of your way until you need it — then delivers exactly what you need, when you need it. Whether you're a developer, power user, or automation enthusiast, ShellMate is the perfect tool to keep your productivity sharp and your environment tailored to you.",
        image: process.env.PUBLIC_URL + '/shellmate-long.png',
        githubLink: 'https://github.com/TheSunnyMoon/Shellmate',
        technologies: ['C#', '.NET', 'Windows Forms']
    },
    {
        id: '2',
        title: 'Project Two',
        description: 'This is a detailed description of Project Two. It includes information about the technologies used, the challenges faced, and the solutions implemented.',
        image: 'https://via.placeholder.com/800x400',
        githubLink: 'https://github.com/user/project-two',
        liveLink: 'https://project-two-demo.com',
        technologies: ['React', 'Tailwind CSS', 'Express']
    },
    {
        id: '3',
        title: 'Project Three',
        description: 'This is a detailed description of Project Three. It includes information about the technologies used, the challenges faced, and the solutions implemented.',
        image: 'https://via.placeholder.com/800x400',
        githubLink: 'https://github.com/user/project-three',
        liveLink: 'https://project-three-demo.com',
        technologies: ['React', 'Tailwind CSS', 'MongoDB']
    }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-6 text-white">Project not found</h1>
                <p className="text-gray-400 mb-8">Sorry, the project you are looking for does not exist.</p>
                <Link to="/" className="text-accent hover:text-accent-light">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-white">{project.title}</h1>
                
                <div className="mb-10">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Project Description</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="bg-dark-700 text-accent-light px-3 py-1 rounded-full text-sm border border-dark-600"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-700 hover:bg-dark-600 text-white py-2 px-6 rounded-md text-center transition duration-300 border border-dark-600"
                    >
                        View on GitHub
                    </a>
                    {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-accent-dark text-white py-2 px-6 rounded-md text-center transition duration-300"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;