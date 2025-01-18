import React from 'react';

const CustomLayout = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-5 max-w-[90%] mx-auto sm:p-20 shadow-xl ">
            <div className="flex-1 mb-20 xl:mb-0 shadow-xl  ">
                <div className="flex flex-col justify-center h-full p-5 bg-gradient-to-b from-[#38695c] to-[#ffffff] items-center ">
                    <img src="isometric.png" alt="Example" className="w-[60%] object-cover " />
                    <p className='max-w-[260px] text-center text-2xl '><span className='font-bold text-[#366659] text-3xl '>50</span> Effective ways to increase Participation for your Events</p>
                </div>

                <div className="text-left ">
                    <button className="bg-primary text-white px-16 py-3 rounded-lg my-5 ">Download</button>
                </div>
            </div>

            <div className="flex-1">
                <div >
                <div className="card flex flex-col justify-between h-[50%] xl:p-24 shadow-xl text-center bg-[#dfb21e1f] mb-5 xl:mb-0 ">
                    <span className='font-bold text-2xl' >Subscribe to our Newsletter</span>
                    <p className=' text-lg my-3 ' >Get our latest updates in your email</p>
                    <input type="email" placeholder="Email" className="outline-none placeholder:text-center my-3 p-3 rounded-md mb-5 text-[1em] max-w-[500px] xl:w-full mx-auto  " />
                    <button className="bg-primary text-white border-none outline-none cursor-pointer px-4 py-3 rounded-md shadow-lg hover:bg-[#0056b3] ease-linear duration-500 w-full max-w-[300px] mx-auto ">Subscribe</button>
                </div>
                <div className="card flex flex-col justify-between h-[40%] xl:p-24 shadow-2xl text-center bg-[#8ec7fc12] ">
                    <span className='font-bold text-2xl' >Digital Rewards</span>
                    <p className=' text-lg my-3 ' >Find out how to get the peace of mind you deserve with issuing digital rewards.</p>
                    <button className="bg-primary text-white border-none outline-none cursor-pointer px-4 py-3 rounded-md shadow-lg hover:bg-[#0056b3] ease-linear duration-500 w-full max-w-[300px] mx-auto ">Book a Demo</button>
                </div>
                </div>
            </div>


        </div>
    );
};

export default CustomLayout;
