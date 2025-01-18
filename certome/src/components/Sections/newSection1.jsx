import React from 'react'
const newSection1 = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between my-20 mx-auto relative px-[10%]   ">
            <div className="w-full lg:w-[40%] mb-20 ">
                <div className=" grid grid-cols-2 gap-10 relative ">
                    <div className='text-center' >
                        <span className=' text-sm my-4 font-semibold'>
                            Assiociations
                        </span>
                        <img src="/image1.png" alt="Image 1" className="" />
                    </div> <div className='text-center' >
                        <span className=' text-sm my-4 font-semibold'>
                            E-Learning Platform
                        </span>
                        <img src="/image2.png" alt="Image 2" className="" />
                    </div> <div className='text-center' >
                        <span className=' text-sm my-4 font-semibold'>
                            Professional Training
                        </span>
                        <img src="/image3.png" alt="Image 3" className="" />
                    </div> <div className='text-center' >
                        <span className=' text-sm my-4 font-semibold'>
                            Government Organisations
                        </span>
                        <img src="/image4.png" alt="Image 4" className="" />
                    </div>
                    
                    <span className=' text-sm font-semibold absolute -bottom-6 lg:-bottom-20 left-[40%] '>
                            Schools
                        </span>
                    <img src="/overlap_image.png" alt="Overlapping Image" className="absolute lg:top-[20%] lg:left-[20%] " />
                </div>
            </div>
            <div className="text-column2 w-full m-0 lg:w-[50%] ">
                <h2 className='font-bold max-w-[500px] text-center mx-auto '>Industries that Benefit From Our PLatform</h2>
                <p className=' ' >
                    Discover how Certome can streamline your certification process with seamless integration, easy verification, and enhanced credibility.
                </p>
                <img src="/logos_image.png" alt="Description image" className="w-full mb-5 " />
                <button className="style-btn w-full lg:w-[50%] ">Create new Account</button>
            </div>
        </div>
    )
}

export default newSection1
