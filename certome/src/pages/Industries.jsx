import React from 'react'
import IndustriesHeader from '../components/IndustriesHeader'
import IndustriesText from '../components/IndustriesText'; // Import your IndustriesText component
import Footer from '../components/Footer';
import Rectangle from '../components/Sections/Rectangle'



const Industries = () => {
  return (
    <div className='container'>
        <IndustriesHeader />
        <IndustriesText />
        <Rectangle 
        imageUrl="LogoClouds.png" // Replace with your image URL
        altText="Description of the image" // Provide an alt description
      />
        <Footer/>
    
  </div>
  )
}

export default Industries