import React from 'react';
import ImageOne from '../assets/images/ImageOne.png'; // Replace with your actual image paths
import ImageTwo from '../assets/images/ImageTwo.png';
import ImageThree from '../assets/images/ImageThree.png';
import ImageFour from '../assets/images/ImageFour.png';
import ImageFive from '../assets/images/ImageFive.png';

const IndustriesText = () => {
  const data = [
    {
      title: 'Associations',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus gravida euismod sem diam. Neque nulla vulputate hendrerit nisl augue. Tristique ornare commodo vitae lorem adipiscing vel morbi pellentesque auctor. Tortor proin pellentesque in lacinia sollicitudin fermentum dolor volutpat nullam. Quam nibh condimentum aliquet quis. Vestibulum diam vulputate phasellus eget. Turpis pellentesque mattis natoque massa auctor vel. Dapibus est vivamus id justo. Sit viverra vel mattis lacus eget ipsum gravida..',
      image: ImageOne,
    },
    {
      title: 'E-Learning Platform',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus gravida euismod sem diam. Neque nulla vulputate hendrerit nisl augue. Tristique ornare commodo vitae lorem adipiscing vel morbi pellentesque auctor. Tortor proin pellentesque in lacinia sollicitudin fermentum dolor volutpat nullam. Quam nibh condimentum aliquet quis. Vestibulum diam vulputate phasellus eget. Turpis pellentesque mattis natoque massa auctor vel. Dapibus est vivamus id justo. Sit viverra vel mattis lacus eget ipsum gravida.',
      image: ImageTwo,
    },
    {
      title: 'Professional Training',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus gravida euismod sem diam. Neque nulla vulputate hendrerit nisl augue. Tristique ornare commodo vitae lorem adipiscing vel morbi pellentesque auctor. Tortor proin pellentesque in lacinia sollicitudin fermentum dolor volutpat nullam. Quam nibh condimentum aliquet quis. Vestibulum diam vulputate phasellus eget. Turpis pellentesque mattis natoque massa auctor vel. Dapibus est vivamus id justo. Sit viverra vel mattis lacus eget ipsum gravida.',
      image: ImageThree,
    },
    {
      title: 'Government Organization',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus gravida euismod sem diam. Neque nulla vulputate hendrerit nisl augue. Tristique ornare commodo vitae lorem adipiscing vel morbi pellentesque auctor. Tortor proin pellentesque in lacinia sollicitudin fermentum dolor volutpat nullam. Quam nibh condimentum aliquet quis. Vestibulum diam vulputate phasellus eget. Turpis pellentesque mattis natoque massa auctor vel. Dapibus est vivamus id justo. Sit viverra vel mattis lacus eget ipsum gravida.',
      image: ImageFour,
    },
    {
      title: 'Schools',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus gravida euismod sem diam. Neque nulla vulputate hendrerit nisl augue. Tristique ornare commodo vitae lorem adipiscing vel morbi pellentesque auctor. Tortor proin pellentesque in lacinia sollicitudin fermentum dolor volutpat nullam. Quam nibh condimentum aliquet quis. Vestibulum diam vulputate phasellus eget. Turpis pellentesque mattis natoque massa auctor vel. Dapibus est vivamus id justo. Sit viverra vel mattis lacus eget ipsum gravida.',
      image: ImageFive,
    },
  ];

  return (
    <div className=" my-20 mx-5 sm:mx-12 ">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row lg:my-0 my-20 items-center">
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-1 justify-center ">
                <img src={item.image} alt={`Industry ${index + 1}`} className="max-w-[100%] " />
              </div>
              <div className="flex-1 sm:mx-5 text-center my-5 -mt-10 ">
                <h3 className="text-3xl font-MontserratBold my-5 mt-10 ">{item.title}</h3>
                <p className="text-xl text-left " style={{ color: '#000' }}>{item.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 sm:mx-5 text-center my-5 -mt-10 ">
                <h3 className="text-3xl font-MontserratBold my-5 mt-10 ">{item.title}</h3>
                <p className="text-xl text-left " style={{ color: '#000' }}>{item.description}</p>
              </div>
              <div className="flex flex-1 justify-center ">
                <img src={item.image} alt={`Industry ${index + 1}`} className="max-w-[100%] " />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default IndustriesText;
