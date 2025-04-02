import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'JavaScript/Typescript', level: 'Expert', percentage: 90 },
        { name: 'React', level: 'Expert', percentage: 90 },
        { name: 'CSS/Tailwind', level: 'Intermediate', percentage: 75 },
        { name: 'SQL', level: 'Expert', percentage: 85 },
        { name: '.Net (C#)', level: 'Expert', percentage: 95 },
        { name: 'Python', level: 'Intermediate', percentage: 55 },
        { name: 'Next', level: 'Intermediate', percentage: 60 },
        { name: 'Git', level: 'Intermediate', percentage: 65 },
    ];

    return (
        <section id="skills" className="py-32 bg-cyber-dark">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">
                    <span className="text-gradient">SKILLS</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-neon-purple mx-auto mb-16"></div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="content-box bg-cyber-black p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                                <span className="text-sm px-3 py-1 bg-accent text-white rounded-md font-medium">
                                    {skill.level}
                                </span>
                            </div>
                            <div className="w-full h-2 bg-gray-800 rounded-full mb-2 mt-2">
                                <div 
                                    className="h-full rounded-full bg-gradient-to-r from-neon-purple to-accent relative"
                                    style={{ width: `${skill.percentage}%` }}
                                >
                                    <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full bg-white border-2 border-accent"></div>
                                </div>
                            </div>
                            <div className="text-right text-accent font-medium mt-1">
                                {skill.percentage}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;