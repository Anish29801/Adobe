import React from 'react';
import main1 from '../img/main1.webp';
import Adobe from "../img/Adobe.svg";

const RedGradientCard = () => (
  <div className="p-6 rounded-lg bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Meet AI Assistant for Acrobat</h2>
    <p className="mb-4">
      Ask your document questions. Get one-click summaries for fast insights and level up your productivity.
    </p>
    <a href="#" className="underline hover:text-red-300">
      <h2>Learn more</h2>
    </a>
    <div className="relative mt-8">
      <img src={main1} alt="Card main 1" className="w-full rounded-lg" />
      <img src={Adobe} alt="Adobe logo" className="absolute bottom-4 right-4 w-4" />
    </div>
  </div>
);

export default RedGradientCard;
