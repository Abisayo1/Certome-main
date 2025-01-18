import React from 'react';

const CompanySessionSection2 = () => {
  return (
    <div 
      className="flex flex-col items-center bg-cover bg-center py-10 px-4"
      style={{ backgroundImage: "url('./mapx.png')" }}
    >
      {/* Top Images */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full max-w-4xl mb-8">
        <img 
          src="/Rectangle 60.png" 
          alt="Top Left" 
          className="w-full md:w-[48%] rounded-xl"
        />
        <img 
          src="/Rectangle 61.png" 
          alt="Top Right" 
          className="w-full md:w-[48%] rounded-xl"
        />
      </div>

      {/* Bottom Image */}
      <div className="w-full max-w-3xl flex justify-center">
        <img 
          src="/Rectangle 62.png" 
          alt="Bottom" 
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
}

export default CompanySessionSection2;
