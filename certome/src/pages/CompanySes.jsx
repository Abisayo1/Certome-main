import React from 'react'
import CompanySesHead from '../components/CompanySesHead'
import CompanySessionSection2 from '../components/CompanySessionSection2';
import CompanySessionSection3 from '../components/CompanySessionSection3';
import CompanySessionSection4 from '../components/CompanySessionSection4';
import Testimonials from '../components/Testimonials'
import Title from '../components/Title';
import Footer from '../components/Footer';


const CompanySes = () => {
  return (
    <div className='container'>
      <CompanySesHead />
      <CompanySessionSection2/>
      <CompanySessionSection3/>
      <CompanySessionSection4/>
      <Title subTitle= '"Our dedication to enhancing your experience extends beyond expectations. Hear what top-tier organizations have to share."' title ='"Testimonials from Our Valued Clients"'/>
      <Testimonials />
      <Footer />


    </div>
  )
}

export default CompanySes;
