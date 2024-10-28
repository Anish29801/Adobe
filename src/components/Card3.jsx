import React from 'react';
import main5 from '../img/main5.webp';
import main6 from '../img/main6.webp';
import main7 from '../img/main7.webp';

const Card3 = () => {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* First Card */}
      <div className="bg-[#FCE9E6] p-6 md:p-8 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Your imagination’s new best friend.</h2>
        <p className="text-lg md:text-xl font-semibold mb-4">
          Use generative AI and simple text prompts to create the highest quality output — beautiful images, text
          effects, and fresh color palettes.
        </p>
        <a href="#" className="text-black hover:underline font-semibold">Get Firefly free</a>
        <div className="mt-4">
          <img
            src={main5}
            alt="Dog in a sweater"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Second Card */}
      <div className="bg-[#5e53dd] p-6 md:p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-lg md:text-xl font-bold mb-4">ADOBE GENSTUDIO</h2>
        <p className="text-sm md:text-base mb-4">
          Accelerate your marketing content. Plan, create, distribute, activate, and measure content.
        </p>
        <a href="#" className="hover:underline font-semibold">Learn more</a>
        <div className="mt-4">
          <img
            src={main6}
            alt="Creative Cloud preview"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Third Card */}
      <div className="bg-[#FFA07A] p-6 md:p-8 rounded-lg shadow-lg text-gray-800">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Students and Teachers</h2>
        <p className="text-5xl font-bold md:text-xl mb-4">
        Save over 60% on Creative Cloud.
        </p>
        <p className="text-sm md:text-base mb-4">Go from standard to standout with 20+ amazing apps.</p>
        <a href="#" className="hover:underline font-semibold">Learn more</a>
        <div className="mt-4">
          <img
            src={main7}
            alt="Illustration of students"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card3;
