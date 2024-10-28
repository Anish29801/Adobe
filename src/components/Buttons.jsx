import React from 'react'

const Buttons = () => {
    return (
        <div className='button-lists'>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4">
                {/* Text */}
                <h2 className='mr-0 md:mr-4 font-normal mb-4 md:mb-0'>
                    Creative Cloud for: 
                </h2>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Everyone
                    </a>

                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Students
                    </a>

                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Photographers
                    </a>

                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Business
                    </a>

                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Adobe Stock
                    </a>

                    <a href="#"
                        className="text-gray-700 hover:bg-gray-900 hover:text-white px-3 py-2 border border-black rounded-3xl text-xs md:text-sm font-medium">
                        Special offers
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Buttons
