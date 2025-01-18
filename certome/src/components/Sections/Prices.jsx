import React from 'react';
import { BiCheckCircle, BiSolidCheckCircle, BiSolidXCircle, BiXCircle } from 'react-icons/bi';


const Prices = () => {

  const Plans = [
    {name:"Normal Plan", description:" Lorem ipsum dolor sit", price:15, feature1:true, feature2:true, feature3:false, feature4:true, route:"/"},
    {name:"Semi-Pro Plan", description:" Lorem ipsum dolor sit", price:25, feature1:true, feature2:true, feature3:true, feature4:false, route:"/"},
    {name:"Pro Plan", description:" Lorem ipsum dolor sit", price:35, feature1:true, feature2:false, feature3:true, feature4:true, route:"/"},
    {name:"Big Plan", description:" Lorem ipsum dolor sit", price:50, feature1:true, feature2:true, feature3:true, feature4:true, route:"/"}
  ]

  return (
    <div className="grid justify-center lg:grid-cols-2 my-6 mx-[20%] gap-10 ">
      {Plans.map((data,index) => (
        <div className=' first:bg-[#e010660d] bg-[#467eff0d] last:bg-[#89eb670d] shadow-lg  w-72 p-5 ' key={index}>
          <div className=' text-xl font-MontserratBold ' >{data.name}</div>
          <div className='text-sm' >{data.description}</div>
          <div className='my-4 text-sm ' ><span className='text-5xl mr-2  font-MontserratBold  ' >${data.price}</span>USD/monthly</div>
          <div className="features">
          <div className='flex items-center my-4' >{data.feature1 == true ? <div className='text-malachite-500 mr-1 text-xl' ><BiSolidCheckCircle/></div> : <div className='text-black text-xl mr-1 text-opacity-45' ><BiSolidXCircle/></div> } Lorem ipsum</div>
          <div className='flex items-center my-4' >{data.feature2 == true ? <div className='text-malachite-500 mr-1 text-xl' ><BiSolidCheckCircle/></div> : <div className='text-black text-xl mr-1 text-opacity-45' ><BiSolidXCircle/></div> } Lorem ipsum</div>
          <div className='flex items-center my-4' >{data.feature3 == true ? <div className='text-malachite-500 mr-1 text-xl' ><BiSolidCheckCircle/></div> : <div className='text-black text-xl mr-1 text-opacity-45' ><BiSolidXCircle/></div> } Lorem ipsum</div>
          <div className='flex items-center my-4' >{data.feature4 == true ? <div className='text-malachite-500 mr-1 text-xl' ><BiSolidCheckCircle/></div> : <div className='text-black text-xl mr-1 text-opacity-45' ><BiSolidXCircle/></div> } Lorem ipsum</div>
          </div>
          <div className=' px-4 max-w-[150px] rounded-md float-end my-5 py-2 bg-primary text-white text-center ' >Subscribe</div>
        </div>
      ))}
    </div>
  );
};

export default Prices;
