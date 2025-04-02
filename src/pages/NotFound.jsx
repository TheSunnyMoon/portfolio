import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-5xl font-bold text-white mb-6">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8 text-center max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
                to="/" 
                className="bg-accent hover:bg-accent-dark text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;