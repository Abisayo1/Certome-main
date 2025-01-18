import React from 'react'
import HeaderPricing from '../components/Sections/HeaderPricing'
import Prices from '../components/Sections/Prices'
import Rectangle from '../components/Sections/Rectangle'
import Testimonials from '../components/Testimonials'
import Title from '../components/Title';
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <div className=''>
      <HeaderPricing />
      <Prices />
      <Rectangle 
        imageUrl="LogoClouds.png" // Replace with your image URL
        altText="Description of the image" // Provide an alt description
      />
      <Title subTitle= '"Our dedication to enhancing your experience extends beyond expectations. Hear what top-tier organizations have to share."' title ='"Testimonials from Our Valued Clients"'/>
      <Testimonials />
      <Footer/>
      
    </div>
  )
}

export default Pricing