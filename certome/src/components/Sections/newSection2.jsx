import React from 'react'

const newSection2 = () => {
  return (
    <div className="px-[10%] bg-[#fff8eb] py-20 text-center ">
      <h2 className="text-2xl font-bold text-primary ">
        All the necessary tools to provide your recipients with top-notch industry-leading credentials.
      </h2>
      <p className=' text-center mx-auto text-lg text-primary '>Your recipients merit top-notch credentials to maintain their motivation. Discover the user-friendly features necessary to start on
        <strong> Certome</strong> effortlessly.</p>
      <div className="flex flex-col mx-auto lg:flex-row justify-between">
        <div className="w-50% ">
          <img
            src="control1.png" 
            alt="Image 3"
            className="single-images"
          />
        </div>

        <div className="flex-1">
          <div className="overlapping-images">
            <img
              src="dashboard.png"
              alt="Image 1"
              className="imagefirst-images"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default newSection2
