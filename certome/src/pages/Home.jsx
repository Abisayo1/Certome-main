import React from 'react';
import Header from '../components/header/header'
import Section from '../components/Sections/newSection1'
import Section2 from '../components/Sections/newSection2'
import Section3 from '../components/Sections/newSection3'
import Title from '../components/Title';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export function Home() {
  return (
    <div>
      <Header/>
      <Section/>
      <Section2/>
      <Section3/>
      <Title subTitle= '"Our dedication to enhancing your experience extends beyond expectations. Hear what top-tier organizations have to share."' title ='"Testimonials from Our Valued Clients"'/>
      <Testimonials />
      <Footer/>
    </div>
   )
}

      export default Home;
