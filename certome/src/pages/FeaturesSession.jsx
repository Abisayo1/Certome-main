import React from 'react'
import FeaturesSessionHeader from '../components/Sections/FeaturesSessionHeader'
import FeaturesSessionSection2 from '../components/Sections/FeaturesSessionSection2'
import FeaturesSessionSection3 from '../components/Sections/FeaturesSession3'
import FeaturesSessionSection2x from '../components/Sections/FeaturesSessionSection2x.jsx'
import Title from '../components/Title';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import FeaturesSessionSection3Subtopic from '../components/FeaturesSessionSection3Subtopic';

const FeaturesSession = () => {
  return (
    <div>
      <FeaturesSessionHeader />
      <FeaturesSessionSection2x/>
      <FeaturesSessionSection2/>
      <FeaturesSessionSection3Subtopic/>
      <FeaturesSessionSection3/>
      <Title subTitle= '"Our dedication to enhancing your experience extends beyond expectations. Hear what top-tier organizations have to share."' title ='"Testimonials from Our Valued Clients"'/>
      <Testimonials />
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default FeaturesSession