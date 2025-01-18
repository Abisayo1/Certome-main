import React from 'react';

const Rectangle = ({ imageUrl, altText }) => {
  return (
    <div className="flex justify-center items-center  mb-8 ">
      <img src={imageUrl} alt={altText} className="shadow-xl mx-auto rounded-lg h-auto w-[90%] " />
    </div>
  );
};

export default Rectangle;
