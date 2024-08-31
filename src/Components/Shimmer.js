import React from 'react'

const Shimmer = () => {
    return (
      <div className="animate-pulse min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 pt-[72px]">
        <div className="w-full max-w-full mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="w-full max-w-md h-80 bg-gray-700 rounded-lg"></div>
          </div>
          
          <div className="flex-1">
            <div className="h-12 bg-gray-700 rounded mb-6"></div>
            <div className="h-6 bg-gray-700 rounded mb-8"></div>
            
            <div className="flex flex-wrap items-center gap-8 mb-6">
              <div className="w-16 h-6 bg-gray-700 rounded"></div>
              <div className="w-48 h-6 bg-gray-700 rounded"></div>
              <div className="w-32 h-6 bg-gray-700 rounded"></div>
              <div className="w-24 h-6 bg-gray-700 rounded"></div>
            </div>
            
            <ul className="flex flex-wrap gap-4">
              <li className="w-24 h-6 bg-gray-700 rounded-full"></li>
              <li className="w-24 h-6 bg-gray-700 rounded-full"></li>
              <li className="w-24 h-6 bg-gray-700 rounded-full"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Shimmer