import React from 'react';
import main2 from '../assets/main2.jpg';
import Adobe from "../assets/Adobe.svg";

const BlueGradientCard = () => {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
      <h2 className="font-semibold">BUSINESS</h2>
      <h2 className="text-2xl font-bold mb-4">
        34% off the first year on Creative Cloud All Cards
      </h2>
      <p className="mb-4 text-md">
        Get up to 9 licenses for your team at a lower price.*
      </p>
      <a href="#" className='underline'>
        <h2>Learn more</h2>
      </a>
      <div className="relative mt-8">
        <img
          src={main2}
          alt="Card main 2"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg"
        />
        <img src={Adobe} alt="Adobe logo" className="absolute bottom-4 right-4 w-4" />
      </div>
    </div>
  );
};

export default BlueGradientCard;
