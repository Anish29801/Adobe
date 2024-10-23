import React from 'react';

const PinkPurpleGradientCard = () => {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-[#f05a9b] to-[#834dff] text-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fast and Free Editing with Adobe Express</h2>

      <div className="bg-[#ededed] -m-6 mt-4 p-4 text-black rounded-b-lg">
        <h2 className="text-xl font-semibold mb-2">Simple image editing:</h2>
        <ul className="list-none mb-4">
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Remove Background</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Resize Images</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Crop Images</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Convert to SVG</a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Quick video editing</h2>
        <ul className="list-none">
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Trim Videos</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Merge Videos</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Crop Videos</a>
          </li>
          <li className="mb-1">
            <a href="#" className="font-md hover:underline ">Convert to GIF</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PinkPurpleGradientCard;
