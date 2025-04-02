import React from 'react';
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
    return (
        <div className="min-h-[80vh] bg-gradient-to-r from-cyber-dark to-cyber-black flex flex-col items-center justify-center text-center px-4 text-white border-b border-purple-900/30 relative overflow-hidden">
            {/* Utilisation du composant BackgroundBeams */}
            <BackgroundBeams className="opacity-50" />
            
            {/* Particules pour effet futuriste */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-accent-light"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            opacity: Math.random() * 0.5 + 0.2,
                            animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`
                        }}
                    />
                ))}
            </div>
            
            {/* Contenu par-dessus l'effet de rayons */}
            <div className="max-w-2xl relative z-10">
                <h1 className="text-6xl font-cyber font-bold mb-4 text-white tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-accent to-neon-purple">
                        MATHIS MAYORAZ
                    </span>
                </h1>
                <div className="h-0.5 w-48 bg-gradient-to-r from-neon-purple to-accent mx-auto mb-6"></div>
                <p className="text-xl mb-8 text-gray-300 font-cyber">FULL-STACK DEVELOPER // DIGITAL CREATOR</p>
                <div className="relative inline-block group">
                <a 
                    href="#projects" 
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-lg shadow-lg hover:shadow-violet-500/50 transform transition-all duration-300 hover:-translate-y-1"
                >
                    EXPLORE MY WORK
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;