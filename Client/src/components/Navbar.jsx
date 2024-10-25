import React, { useState, useEffect } from 'react';
import Adobe from "../assets/Adobe.svg";
import AdobeExpressIcon from '../assets/adobe-express.webp';
import AcrobatIcon from '../assets/acrobat.svg';
import PhotoshopIcon from '../assets/photoshop.svg';
import LightroomIcon from '../assets/lightroom.svg';
import AcrobatSignIcon from '../assets/acrobat-sign.webp';
import FontsIcon from '../assets/fonts.webp';
import StockIcon from '../assets/stock.webp';
import ExperienceCloudIcon from '../assets/experience-cloud.webp';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleHelpDropdown = () => {
        setIsHelpDropdownOpen(!isHelpDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container') && isDropdownOpen) {
            setIsDropdownOpen(false);
        }
        if (!event.target.closest('.help-dropdown') && isHelpDropdownOpen) {
            setIsHelpDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen, isHelpDropdownOpen]);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img src={Adobe} alt="Adobe" className="h-11 w-auto mr-2" />
                            <h2 className="text-2xl font-bold text-red-600">Adobe</h2>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {["Creativity & Design", "PDF & E-signatures", "Marketing & Commerce"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                {item}
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        ))}
                        <div className="relative help-dropdown">
                            <a
                                href="#"
                                onClick={toggleHelpDropdown}
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                            >
                                Help & Support
                                <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            {isHelpDropdownOpen && (
                                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-64 p-4 z-50">
                                    {/* Help dropdown content */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="dropdown-container relative">
                            <button
                                onClick={toggleDropdown}
                                aria-label="Apps Menu"
                                aria-expanded={isDropdownOpen}
                                className="hidden md:block focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5">
                                    {Array.from({ length: 9 }).map((_, index) => (
                                        <circle key={index} cx={(index % 3) * 25 + 25} cy={Math.floor(index / 3) * 25 + 25} r="10" fill="black" />
                                    ))}
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                                    {/* Dropdown content */}
                                </div>
                            )}
                        </div>
                        <button
                            className="text-gray-700 m-3 hover:text-red-600 px-3 py-2 border border-black rounded-md text-sm font-medium"
                        >
                            Sign In
                        </button>
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
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        <div className="space-y-2">
                            {["Creativity & Design", "PDF & E-signatures", "Marketing & Commerce"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="mt-2">
                                <a
                                    href="#"
                                    onClick={toggleHelpDropdown}
                                    className="block text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Help & Support
                                </a>
                                {isHelpDropdownOpen && (
                                    <div className="bg-white shadow-lg rounded-lg p-4">
                                        {/* Help dropdown content for mobile */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
