import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-[var(--primary-color)] px-4">
                <div className="text-center text-white">
                    <h1 className="text-8xl font-extrabold mb-4">404</h1>

                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Page Not Found
                    </h2>

                    <p className="text-white/80 max-w-md mx-auto mb-6">
                        Oops! The page you are looking for does not exist or has been moved.
                    </p>

                    <Link
                        href="/"
                        className="inline-block bg-white text-[var(--primary-color)] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default notFound;