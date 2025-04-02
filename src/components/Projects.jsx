import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: '1',
        title: 'Shellmate',
        description: 'ShellMate is a lightweight and customizable Windows shell companion designed to enhance your workflow with a clean and modern UI. It replaces the default window behavior with a sleek, borderless design and intuitive controls.',
        technologies: ['C#', '.NET', 'Windows Forms'],
        link: 'https://github.com/TheSunnyMoon/Shellmate',
        image: process.env.PUBLIC_URL + '/shellmate.png'    },
    /*{
        id: '2',
        title: 'Neural Interface',
        description: 'AI-powered interface with advanced machine learning capabilities. This system utilizes neural networks to create intuitive user experiences and intelligent recommendations.',
        technologies: ['Python', 'TensorFlow', 'React'],
        link: 'https://github.com/user/project-two',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600'
    },
    {
        id: '3',
        title: 'Cyber Security Hub',
        description: 'Next-gen security platform with blockchain authentication. This comprehensive solution provides enterprise-grade protection against digital threats and unauthorized access.',
        technologies: ['Blockchain', 'Solidity', 'Express'],
        link: 'https://github.com/user/project-three',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600'
    }*/
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000); // Change slide every 10 seconds
        
        return () => clearInterval(interval);
    }, [activeIndex]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };
    
    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };
    
    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 100) { // Swipe left
            handleNext();
        } else if (touchEndX - touchStartX > 100) { // Swipe right
            handlePrev();
        }
    };

    return (
        <section id="projects" className="py-32 bg-cyber-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">
                    <span className="text-gradient">PROJECTS</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-neon-purple mx-auto mb-16"></div>
                
                {/* Carousel container */}
                <div 
                    className="relative overflow-hidden rounded-xl"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Project slides */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="w-full flex-shrink-0 glass-card border border-accent/20 overflow-hidden"
                            >
                                <div className="md:flex">
                                    {/* Project Image */}
                                    <div className="md:w-1/2 relative">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-72 md:h-full object-cover" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/70 to-transparent md:bg-gradient-to-t"></div>
                                        <div className="absolute top-8 left-8 md:hidden">
                                            <h3 className="text-2xl font-bold text-white shadow-text">{project.title}</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Project Details */}
                                    <div className="md:w-1/2 p-8 md:p-10">
                                        <h3 className="hidden md:block text-2xl font-bold text-white mb-4">{project.title}</h3>
                                        <p className="text-gray-100 mb-6">{project.description}</p>
                                        
                                        <div className="flex flex-wrap mb-8 gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span 
                                                    key={index} 
                                                    className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-accent hover:text-accent-light font-medium transition-colors flex items-center"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                                                </svg>
                                                CODE
                                            </a>
                                            <Link 
                                                to={`/project/${project.id}`} 
                                                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 flex items-center"
                                            >
                                                DETAILS
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-5 w-5 ml-2" 
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation arrows */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                        aria-label="Previous project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                        aria-label="Next project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                
                {/* Dots indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === activeIndex ? 'bg-accent' : 'bg-accent/30'
                            }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;    