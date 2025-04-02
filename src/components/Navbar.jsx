import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (event) => {
            // Ferme le menu si le clic est en dehors de la navbar et du menu
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Ferme le menu quand l'utilisateur clique sur un lien
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/90 backdrop-blur-md shadow-neon-glow' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-white tracking-wider">
                            <Link to="/" className="font-cyber relative group">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-neon-purple">MATHIS</span>
                                <span className="ml-1 text-white">DEV</span>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-accent transition-all duration-300 group-hover:w-full"></div>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {["Home", "About", "Projects", "Skills"/*, "Contact"*/].map((item, index) => (
                            <a 
                                key={index}
                                href={item === "Home" ? "/" : `#${item.toLowerCase()}`} 
                                className="text-white hover:text-accent transition duration-300 font-cyber tracking-wider relative group"
                            >
                                {item.toUpperCase()}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></div>
                            </a>
                        ))}
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
                
            {/* Mobile menu - version améliorée */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Overlay semi-transparent pour le fond */}
                    <div 
                        className="absolute "
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    
                    {/* Contenu du menu */}
                    <div 
                        ref={menuRef}
                        className="absolute top-[72px] left-0 right-0 glass-card border-t border-b border-accent/30 overflow-hidden animate-fadeIn"
                    >
                        <div className="flex flex-col pt-3 pb-4">
                            {["Home", "About", "Projects", "Skills"/*, "Contact"*/].map((item, index) => (
                                <a 
                                    key={index}
                                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                                    className="text-white hover:bg-accent/20 font-cyber tracking-wider px-6 py-3 border-l-2 border-transparent hover:border-accent transition-all duration-300 flex items-center"
                                    onClick={handleMenuItemClick}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                                    {item.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;