import { ArrowRight } from "lucide-react";

const HeaderCareer3 = () => {
  return (
    <div className="flex flex-col items-center text-center bg-[#F9F9F9] p-10">
      <p className="text-lg">Come join us</p>
      <h1 className="text-3xl font-bold">Career Openings</h1>
      <p className="max-w-2xl text-gray-600 mt-4">
        We’re always looking for creative, talented self-starters to join the CERTOME family. 
        Check out our open roles below and fill out an application.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-10 w-full max-w-5xl">
        {/* Left Column */}
        <ul className="space-y-2 max-lg:ml-10 md:text-left md:w-full">
          <li>HT & Admin</li>
          <li className="text-[#D2232A]">Engineering (20)</li>
          <li>Support</li>
          <li>Design</li>
          <li>Digital Marketing</li>
        </ul>

        {/* Right Columns */}
        <div className="col-span-4 flex flex-col space-y-4 w-full">
          {[
            ["Digital Marketing", "2 Years", "2021-05-08"],
            ["Wordpress Developer", "1 Year", "2021-05-08"],
            ["Javascript", "3 Years", "2021-05-08"],
            ["Apps Developer", "2 Years", "2021-05-08"],
            ["IOS Developer", "4 Years", "2021-05-08"],
          ].map((row, index) => (
            <div key={index} className="shadow-lg p-4 flex flex-col md:flex-row justify-between items-center rounded-lg">
              <div className="w-full md:w-1/3 text-center md:text-left">{row[0]}</div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <p className="text-gray-400">Experience</p>
                {row[1]}
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left">
                <p className="text-gray-400">Deadline</p>
                {row[2]}
              </div>
              <button className="p-2 bg-blue-500 text-black rounded-full mt-2 md:mt-0">
                <ArrowRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCareer3;