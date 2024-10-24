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

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container') && isDropdownOpen) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="flex items-center">
                                <img src={Adobe} alt="Adobe" className="h-11 w-auto mr-2" />
                                <h2 className="text-2xl font-bold text-red-600">Adobe</h2>
                            </a>
                        </div>
                        <div className="hidden md:ml-6 md:flex space-x-4">
                            {["Creativity & Design", "PDF & E-signatures", "Marketing & Commerce", "Help & Support"].map((item) => (
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
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="dropdown-container relative">
                            <button
                                onClick={toggleDropdown}
                                aria-label="Apps Menu"
                                aria-expanded={isDropdownOpen}
                                className="focus:outline-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5">
                                    {Array.from({ length: 9 }).map((_, index) => (
                                        <circle key={index} cx={(index % 3) * 25 + 25} cy={Math.floor(index / 3) * 25 + 25} r="10" fill="black" />
                                    ))}
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                                    <h3 className="text-gray-700 font-semibold mb-3">Web Apps</h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { icon: AdobeExpressIcon, name: 'Adobe Express' },
                                            { icon: AcrobatIcon, name: 'Acrobat' },
                                            { icon: PhotoshopIcon, name: 'Photoshop' },
                                            { icon: LightroomIcon, name: 'Lightroom' },
                                            { icon: AcrobatSignIcon, name: 'Acrobat Sign' },
                                            { icon: FontsIcon, name: 'Fonts' },
                                            { icon: StockIcon, name: 'Stock' },
                                            { icon: ExperienceCloudIcon, name: 'Experience Cloud' },
                                        ].map(({ icon, name }) => (
                                            <div key={name} className="flex flex-col items-center">
                                                <img src={icon} alt={name} className="h-10 w-10" />
                                                <span className="text-sm text-gray-700 mt-1">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t mt-3 pt-3 flex justify-between items-center bg-gray-100">
                                        <a href="#" className="text-gray-800 hover:text-red-600 text-sm font-medium transition duration-200">
                                            Adobe.com
                                        </a>
                                        <a href="#" className="text-gray-800 hover:text-red-600 text-sm font-medium transition duration-200">
                                            All apps
                                        </a>
                                    </div>

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
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {["Creativity & Design", "PDF & E-signatures", "Marketing & Commerce", "Help & Support"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
