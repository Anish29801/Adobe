import React from 'react';
import RedGradientCard from './RedGradientCard.jsx';
import BlueGradientCard from './BlueGradientCard.jsx';
import PinkPurpleGradientCard from './PinkPurpleGradientCard.jsx';

const Cards1 = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-center p-6">
      <RedGradientCard />
      <BlueGradientCard />
      <PinkPurpleGradientCard />
    </div>
  );
};

export default Cards1;
