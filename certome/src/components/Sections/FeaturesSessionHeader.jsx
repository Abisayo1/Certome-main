import React from "react";

const FeaturesSessionHeader = () => {
  return (
    <div className="relative bg-gray-50 py-16 px-8 lg:px-16">
      {/* Background Image */}
      <div className="absolute sm:-mt-60 left-0 w-full lg:w-auto">
        <img src="/badge.png" alt="Background" className="w-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="relative text-center space-y-8 max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Infrastructure for Reward to Determined Recipients
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
          Deliver digital certificates with a touch of professionalism and memorability.<br />
          Opt for our personalized credential wallet feature for convenient storage of your accomplishments.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 border-2 border-[#060660] text-[#060660] rounded-lg font-medium hover:bg-[#060660] hover:text-white transition">
            Create a Free Account
          </button>
          <button className="px-6 py-3 bg-[#060660] text-white rounded-lg font-medium hover:opacity-90 transition">
            Book a Demo
          </button>
        </div>

        {/* Bulleted List */}
        <ul className="flex justify-center text-gray-500 text-sm sm:text-base">
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 border-2 border-black bg-white rounded-full inline-block"></span>
            <span>No card Requirement | Cancel anytime | Free Technical sessions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSessionHeader;
