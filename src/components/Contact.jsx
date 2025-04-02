import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    // Gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Utiliser FormSubmit.co (pas besoin de s'inscrire)
            const response = await fetch("https://formsubmit.co/customer@mayorazmathis.ch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });
            
            if (response.ok) {
                setFormStatus({ type: 'success', message: 'Message sent successfully!' });
                // Réinitialiser le formulaire
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const constructMailtoLink = () => {
        const subject = `Contact from Portfolio - ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        return `mailto:customer@mayorazmathis.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };


    const inputClasses = "w-full px-4 py-3 bg-cyber-black/80 border border-purple-900/30 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-cyber tracking-wide";

    return (
        <section id="contact" className="py-32 bg-cyber-dark">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center font-cyber tracking-wider mb-4 text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-neon-purple">CONTACT ME</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-accent to-neon-purple mx-auto mb-16"></div>
                
                <div className="relative cyber-border bg-cyber-black/60 rounded-lg shadow-neon-glow p-6 md:p-10 backdrop-blur-sm">
                    <div className="absolute -top-3 left-4 bg-cyber-dark px-2 text-xs text-accent font-cyber tracking-wider">
                        NEW MESSAGE
                    </div>
                    <div className="absolute top-0 right-0 m-4 flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Message de statut */}
                    {formStatus && (
                        <div className={`mb-4 p-3 rounded-md ${
                            formStatus.type === 'success' 
                                ? 'bg-green-900/30 border border-green-500 text-green-400' 
                                : 'bg-red-900/30 border border-red-500 text-red-400'
                        }`}>
                            {formStatus.message}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        {/* Ces champs seront utilisés par FormSubmit */}
                        <input type="hidden" name="_subject" value="New contact from Portfolio" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_next" value={window.location.href} />
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-cyber tracking-wider"> NAME</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className={inputClasses}
                                placeholder="Enter your name..."
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-cyber tracking-wider"> EMAIL</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={inputClasses}
                                placeholder="Enter your email..."
                                disabled={isSubmitting}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-cyber tracking-wider"> MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="5"
                                className={inputClasses}
                                placeholder="Type your message here..."
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="cyber-btn font-cyber tracking-wider w-full md:w-auto group"
                            >
                                SEND MESSAGE 
                                <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                            </button>
                        </div>
                    </form>
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        <p>Clicking "Send Message" will open your default email client.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;