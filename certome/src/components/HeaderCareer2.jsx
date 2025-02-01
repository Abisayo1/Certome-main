import React from 'react';

const HeaderCareer2 = () => {
  return (
    <div className="relative max-lg:items-center overflow-hidden px-6 lg:px-20 py-16 text-black font-montserrat text-center">
      {/* Background Badge Image */}
      <img
        src="/badge.png"
        alt="Badge"
        className="absolute top-0 left-0 w-80 h-96"
      />

      {/* Three Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center lg:text-left">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-semibold max-lg:ml-10 text-gray-300">Benefits</h3>
          <h1 className="text-4xl font-bold max-lg:ml-10 my-3">Why you Should Join Our
          Awesome Team</h1>
          <p className="text-sm max-lg:ml-10 text-gray-300">
          We want to feel like home when you are working at Certome & for that we have curated a great set of benefits for you. It all starts with the free lunch!
          </p>
        </div>

        {/* Right Columns (Features Grid) */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          {/* Feature Item 1 */}
          <div className="flex flex-col items-center">
            <img src="/icon1.png" alt="Icon 1" className="w-12 h-12 mb-2" />
            <h4 className="text-lg font-semibold">Team work</h4>
            <p className="text-sm text-gray-300">
              Enjoy remote work options with a flexible schedule.
            </p>
          </div>

          {/* Feature Item 2 */}
          <div className="flex flex-col items-center">
            <img src="/icon2.png" alt="Icon 2" className="w-12 h-12 mb-2" />
            <h4 className="text-lg font-semibold">Secured Future</h4>
            <p className="text-sm text-gray-300">
              Career development programs to help you advance.
            </p>
          </div>

          {/* Feature Item 3 */}
          <div className="flex flex-col items-center">
            <img src="/icon3.png" alt="Icon 3" className="w-12 h-12 mb-2" />
            <h4 className="text-lg font-semibold">Learning Opportunity</h4>
            <p className="text-sm text-gray-300">
              Work with talented professionals and grow together.
            </p>
          </div>

          {/* Feature Item 4 */}
          <div className="flex flex-col items-center">
            <img src="/icon4.png" alt="Icon 4" className="w-12 h-12 mb-2" />
            <h4 className="text-lg font-semibold">Upgrade Skills</h4>
            <p className="text-sm text-gray-300">
              Competitive salaries, health benefits, and perks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCareer2;