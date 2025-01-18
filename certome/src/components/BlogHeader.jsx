import React from 'react';

const BlogHeader = () => {
    return (
        <div className=" sm:p-5 text-center m-3 sm:mt-3 sm:mb-20 ">

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-MontserratBold text-primary mb-5 text-left ">Trending Topics</h1>

            {/* Buttons */}
            <div className="flex flex-row justify-start items-center overflow-x-auto gap-3 mb-5 ">
                <button className=" outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] ">All</button>
                <button className="outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] min-w-[200px] ">Design Thinking</button>
                <button className="outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] ">Technology</button>
                <button className="outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] ">Web3</button>
                <button className="outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] ">Programming</button>
                <button className="outline-none py-3 px-5 rounded-3xl bg-white border-2 border-[#797979] cursor-pointer duration-[0.3] focus:text-white focus:font-semibold focus:bg-[blue] ">AI</button>
            </div>


            <div className='h-[80vh]' > {/*focus Image */}
                <div className="relative w-full px-3 h-[300px] sm:h-[500px] rounded-3xl mt-5 ">
                    <img src="badge.png" alt="badge" className="absolute -z-[999] p-3 justify-start mt-3   sm:-mt-[200px] " />
                    <img src="Hero.png" alt="Hero" className="w-full h-full object-cover rounded-3xl " />

                    {/* Card */}
                    <div className="sm:absolute  mt-3 sm:mt-0 -bottom-14 bg-white left-5 sm:px-10 p-5 sm:pt-10 rounded-xl shadow-xl justify-start ">
                        <button className="bg-[blue] text-white border-none outline-none py-2 px-3 text-sm rounded-lg cursor-pointer mb-3 flex ">Technology</button>
                        <h2 className=" text-[1em] sm:text-lg mb-3 max-w-[500px] ">The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        <div className="flex flex-row items-center mt-3">
                            <div className='sm:w-[10%]' > 
                                <img src="imgIcon.jpg" alt="User Thumbnail" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 " />
                                </div>
                            <div className='w-[90%]' >
                                <p className="flex flex-col sm:flex-row items-start w-full mt-3 ">
                                    <span className="text-sm text-[grey] ">Abisayo Folu-Agoi</span>
                                    <span className="text-sm text-[grey] ml-3 ">August 20, 2022</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHeader;
