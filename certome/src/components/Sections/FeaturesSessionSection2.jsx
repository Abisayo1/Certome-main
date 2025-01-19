import React, { useState } from "react";

const FeaturesSessionSection2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const listItems = [
    { number: 1, text: "Track Events", description: "Track your events anywhere, anytime." },
    { number: 2, text: "Credentials", description: "Manage and issue credentials seamlessly." },
    { number: 3, text: "Participants", description: "Keep track of participant data effectively." },
    { number: 4, text: "Track Activities", description: "Monitor activities with precision." },
  ];

  return (
    <div className="p-8 lg:p-16 bg-gray-100 space-y-8">
      {/* Main Section with 3D Shadow */}
      <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-16 transition-shadow duration-300 hover:shadow-3xl">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
            An Infrastructure for Reward Platform
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Deliver digital certificates with a touch of professionalism and memorability. <br></br><br></br>
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-1/2 sm:-mr-40 space-y-6">
            <ol className="space-y-4">
              {listItems.map((item) => (
                <li
                  key={item.number}
                  className="flex items-center space-x-4 hover:bg-gray-200 p-4 rounded-lg transition duration-300"
                  onMouseEnter={() => setHoveredItem(item.number)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#060660] text-white rounded-full font-bold border-2 border-[#060660]">
                    {item.number}
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-800">{item.text}</span>
                    {hoveredItem === item.number && (
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 sm:-mr-40 flex justify-center lg:justify-end">
            <img
              src="Organization Dashboard.png"
              alt="Organization Dashboard"
              className="w-full lg:w-3/4 max-w-md rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSessionSection2;
