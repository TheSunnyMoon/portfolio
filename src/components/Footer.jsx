import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-cyber-black text-gray-400 py-8 mt-12 border-t border-purple-900/30 relative overflow-hidden">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            
            <div className="max-w-6xl mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-white font-cyber tracking-wider text-xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-neon-purple">MATHIS</span>
                            <span className="ml-1 text-white">DEV</span>
                        </h3>
                        <p className="text-sm mt-2 font-cyber">Building the future, one pixel at a time</p>
                    </div>
                    
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/TheSunnyMoon" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="p-2 rounded-full border border-purple-900/30 group-hover:border-accent transition-all duration-300">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </a>
                        <a  href="https://www.linkedin.com/in/mathis-mayoraz-954719256/" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="p-2 rounded-full border border-purple-900/30 group-hover:border-accent transition-all duration-300">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                                </svg>
                            </div>
                        </a>
                        <a target='_blank' rel='noopener noreferrer' href="mailto:customer@mayorazmathis.ch" className="group">
                            <div className="p-2 rounded-full border border-purple-900/30 group-hover:border-accent transition-all duration-300">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-900/30 to-transparent my-6"></div>
                <p className="text-center text-sm font-cyber">&copy; {new Date().getFullYear()} Mathis Mayoraz. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;