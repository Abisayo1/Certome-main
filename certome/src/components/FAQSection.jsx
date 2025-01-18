import React from 'react';
import Accordion from './Accordion';

const FAQSection = () => {
  return (
    <div className=" flex flex-col max-w-[1200px] w-[90%] mx-auto justify-center">
      {/* Banner Section */}
      <div className=" mx-auto relative   mt-10 ">
        <img src="./Content.png" className=' rounded-xl w-full mx-auto max-h-[500px]' alt="" />
        <div className="overlay rounded-xl absolute h-full w-full top-0 bg-[#0000ff7f] "></div>
        <div className="overlay-text  absolute inset-0 flex text-white flex-col justify-center items-center ">
          <div className='text-2xl sm:text-5xl font-MontserratBold py-5 ' >FAQs</div>
          <div className=' sm:text-2xl max-w-[600px] text-center ' >Find out the answers to our most Frequently asked questions.</div>
        </div>
      </div>

      {/* Content Section */}
      <div className=" my-10  ">
        
      <div className='sm:text-3xl text-xl  font-MontserratBold mx-auto max-w-[1000px] text-primary ' > About Certome</div>
      <Accordion title='What is Certome?' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus reiciendis vel sit aspernatur. Quasi optio voluptates unde, dolor autem eligendi aut quibusdam tempore eum assumenda possimus eius facere consectetur! Eos?' />
      <Accordion title='What do we do?' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus reiciendis vel sit aspernatur. Quasi optio voluptates unde, dolor autem eligendi aut quibusdam tempore eum assumenda possimus eius facere consectetur! Eos?' />
      <Accordion title='How does Certome work?' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus reiciendis vel sit aspernatur. Quasi optio voluptates unde, dolor autem eligendi aut quibusdam tempore eum assumenda possimus eius facere consectetur! Eos?' />
      </div>
    </div>
  );
};

export default FAQSection;
