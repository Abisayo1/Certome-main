import React from 'react'
import BlogHeader from '../components/BlogHeader'
import Ads from '../components/ads'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import CustomLayout from '../components/CustomLayout'

const Blogs = () => {
  return (
    <div className='container'>
      <BlogHeader /> 
      <Ads />
      <Gallery />      
      <CustomLayout/>
      <Footer />

    </div>
  )
}

export default Blogs
