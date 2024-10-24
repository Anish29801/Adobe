import React, { useState } from 'react';
import Adobe from "../assets/Adobe.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="flex items-center">
                                <img src={Adobe} alt="Adobe" className="h-11 w-auto mr-2" />
                                <h2 className="text-2xl font-bold text-red-600">Adobe</h2>
                            </a>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:ml-6 md:flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                Creativity & Design
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                PDF & E-signatures
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                Marketing & Commerce
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                Help & Support
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-5 h-5">
                                <circle cx="25" cy="25" r="10" fill="black" />
                                <circle cx="50" cy="25" r="10" fill="black" />
                                <circle cx="75" cy="25" r="10" fill="black" />
                                <circle cx="25" cy="50" r="10" fill="black" />
                                <circle cx="50" cy="50" r="10" fill="black" />
                                <circle cx="75" cy="50" r="10" fill="black" />
                                <circle cx="25" cy="75" r="10" fill="black" />
                                <circle cx="50" cy="75" r="10" fill="black" />
                                <circle cx="75" cy="75" r="10" fill="black" />
                            </svg>
                        </button>
                        <button
                            className="text-gray-700 m-3 hover:text-red-600 px-3 py-2 border border-black rounded-md text-sm font-medium"
                        >
                            Sign In
                        </button>
                        {/* Hamburger Menu Button */}
                        <div className="md:hidden ml-2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Creativity & Design
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            PDF & E-signatures
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Marketing & Commerce
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Help & Support
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
