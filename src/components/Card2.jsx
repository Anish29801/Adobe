import React from 'react';
import main3 from '../img/main3.webp';
import main4 from '../img/main4.webp';
import Adobe from '../img/Adobe.svg';

const Card2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* First Card */}
        <div className="lg:col-span-3 p-6 rounded-lg bg-gradient-to-r from-green-200 via-blue-200 to-pink-300 text-white shadow-md">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 text-black mt-4">Creative Cloud All Apps</h2>
          <p className="text-black mt-4 text-sm sm:text-base">The ultimate toolkit for unlimited creativity</p>
          <p className="text-black mt-4 text-sm sm:text-base">
            Get 20+ apps, tutorials, templates, and more, plus generative AI tools powered by Adobe Firefly.
          </p>
          <div className="mt-10">
            <a href="#" className="text-black font-semibold hover:underline text-sm sm:text-base">
              <h2>Explore the All Apps plan</h2>
            </a>
          </div>
          <div className="relative mt-8">
            <img
              src={main3}
              alt="Creative Cloud preview"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="p-6 rounded-lg bg-[#1b1f3b] text-white shadow-md">
          <h2 className="text-sm sm:text-md font-bold mb-6">ADOBE ILLUSTRATOR</h2>
          <p className="font-semibold text-lg sm:text-xl mt-6">More artwork. Less busywork.</p>
          <p className="text-sm sm:text-md mt-6">Focus on creativity with new features that make your work easier.</p>
          <div className="mt-12">
            <a href="#" className="text-white font-semibold hover:underline text-sm sm:text-base">
              <h2>Learn more</h2>
            </a>
          </div>
          <div className="relative mt-10">
            <img
              src={main4}
              alt="Creative Cloud preview"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card2;
