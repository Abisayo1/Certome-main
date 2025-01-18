import React from 'react';

const HeaderPricing = () => {
  const handleSubscribe = () => {
    // Handle subscribe action (e.g., redirect to subscription page)
    console.log('Subscribe button clicked!');
  };

  return (
    <div className=" mt-3 text-center mx-2 flex flex-col items-center justify-center h-[30vh] bg-white "  >
      <h1 className="text-4xl font-MontserratBold my-4 ">We’ve got the best plans for you</h1>
      <button className="border text-2xl px-4 py-3 rounded-lg font-MontserratBold " onClick={handleSubscribe}>
        Subscribe Today!
      </button>
    </div>
  );
};

export default HeaderPricing;
