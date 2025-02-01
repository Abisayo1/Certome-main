import React from 'react';

const HeaderCareer = () => {
  return (
    <div className="relative h-[400px] overflow-hidden flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="/career_image.png"
        alt="Career"
        className="absolute top-0 left-0 h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">JOIN US</h1>
        <p className="text-sm mb-6">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-[#D2232A] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Join the team
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition">
            Culture
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCareer;
