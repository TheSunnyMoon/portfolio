import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 bg-gradient-to-b from-cyber-black to-cyber-dark relative">
            {/* Grille en arrière-plan avec opacité réduite */}
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            
            {/* Effet de particules subtil */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-accent/30"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.3 + 0.1,
                            animation: `pulse ${Math.random() * 6 + 3}s infinite alternate`
                        }}
                    />
                ))}
            </div>
            
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold text-center font-cyber tracking-wider mb-4 text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-purple">ABOUT ME</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-neon-purple mx-auto mb-12"></div>
                
                <div className="relative bg-cyber-black/70 backdrop-blur-md p-8 rounded-lg border border-accent/20 shadow-neon-glow space-y-6 text-lg">
                    
                    

                    
                    <p className="text-gray-400 font-cyber">
                        I'm a developer with 2 years of experience currently pursuing my studies. My journey into the world of 
                        programming began several years ago when I first needed a computer for school. What started as a simple 
                        necessity quickly grew into a deep passion for coding.
                    </p>
                    <p className="text-gray-400 font-cyber">
                        My main technologies include .NET, React, and Progress ABL, and I genuinely enjoy building all kinds of 
                        applications from scratch. Creating applications from A to Z allows me to blend my logical thinking with 
                        creativity, which is what I appreciate most about programming.

                    </p>
                    <p className="text-gray-400 font-cyber">
                        As a developer, my primary goal is to continually expand my knowledge and enhance my skill set,
                         mastering as many technologies and concepts as possible.

                    </p>
                
                    
                    
                </div>
            </div>
        </section>
    );
};

export default About;