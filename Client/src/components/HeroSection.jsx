import React from 'react';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';

const HeroSection = () => {
    return (
        <div className="hero_1">
            <div className="bg-gradient-to-r from-purple-200 via-pink-300 to-blue-200 min-h-screen flex flex-col items-center justify-center">
                <div className="text-center p-8">
                    <h2 className="text-5xl font-semibold mb-4">Which superpower will it be?</h2>
                    <h4 className="text-2xl mb-8">Free creative fun or premium possibilities?</h4>
                </div>

                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full px-6">
                    {/* Card 1 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 md:w-1/2 w-full">
                        <h3 className="text-md font-semibold mb-2">ADOBE EXPRESS</h3>
                        <p className="text-2xl font-semibold mt-2">
                            Looking for a solution that is simple, fun and free?
                        </p>
                        <p className="text-lg mt-2">
                            Design flyers, logos, Instagram posts and reels and more using all-in-one Adobe Express templates. Fast, easy, and free. No credit card required.
                        </p>
                        <button
                            className="text-gray-700 m-3 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-sm font-medium"
                        >
                            Get Adobe Express free
                        </button>
                        <img 
                            src={img1} 
                            alt="Card Image 1" 
                            className="w-full rounded-lg mb-4" 
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 md:w-1/2 w-full">
                        <h3 className="text-md font-semibold mb-2">ADOBE PHOTOSHOP</h3>
                        <p className="text-2xl font-semibold mt-2">Create at Speed of Imagination</p>
                        <p className="text-md">
                            With new generative AI features and the most advanced Generative Fill yet, it's easier than ever to create stunning, life-like images.
                        </p>
                        <a href="#" className="mb-10">Learn more</a>
                        <img
                            src={img2}
                            alt="Card Image 2"
                            className="w-full rounded-lg mb-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
