import React from 'react'


const header = () => {
  return (
    <div className='flex flex-col overflow-hidden' >
    <div className="flex flex-col lg:flex-row justify-between items-center py-12 max-w-[90%] my-0 mx-auto ">
      <div className="lg:w-[50%] w-full flex-1 p-5 text-center lg:text-left ">
        <img src="/badge.png" alt="a badge" class="  absolute top-[50px] ml-12 z-[-9999]" />
        <h1 className='lg:text-[60px] text-[40px] text-primary mb-5 font-bold ' >Confirmable Certificates and Badges for your
          <span class="gradient-text text-[40px] font-extrabold lg:text-[60px] text-primary mb-5 "> Recipients</span></h1>
        <p className=' text-xl leading-[1.6] mb-5 text-[#060660B2] font-medium  ' >
          Certome is the quick game changer for credential offerings with proven records of simplicity, easy verification and affordability

        </p>
        <button className=" text-white style-btn w-[90%] my-3 max-[1024px]:min-w-[250px] lg:w-[50%] ">Request a demo</button>
        <button className=" text-primary mx-2 style-btn-inner my-3 max-[1024px]:min-w-[250px] w-[50%] lg:w-[40%] ">Sign up </button>
      </div>
      <div className=" w-full lg:w-[50%] z-[-9999] relative flex justify-center items-center  ">
        <img src="lady.png" alt="A girl using the certome for certificate generation" class="lg:scale-150" />

        <img src="badge.png" alt="a badge" class=" absolute z-[-9999] top-[50px] ml-12 " />

      </div>
      

    </div>
    <img src="LogoClouds.png" alt="a logo cloud" class=" shadow-xl min-w-[250px] lg:max-w-[80%] mx-auto " />
    </div>
  )
}

export default header
