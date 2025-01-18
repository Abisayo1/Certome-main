import React from 'react'; // Create a separate CSS file for styling

const CompanySessionSection2 = () => {
  return (
    <div className="flex flex-col items-center " style={{backgroundImage: "url('./mapx.png')",}}>
      {/* Top Images */}
      <div className="flex flex-col items-center mx-auto gap-5 md:flex-row max-w-[800px] mb-8 w-full justify-between ">
        <img src="/Rectangle 60.png" alt="Top Left" className="md:w-[48%] w-[90%] rounded-xl " />
        <img src="/Rectangle 61.png" alt="Top Right" className="md:w-[48%] w-[90%] rounded-xl " />
      </div>
      

      {/* Bottom Image with background */}
      <div className="flex justify-center items-center  w-full max-w-[90%] lg:max-w-[600px] my-5 "> 
        <img src="/Rectangle 62.png" alt="Bottom" className="" />
        
      </div>
      

      
    </div>
    
  );
}

export default CompanySessionSection2;
