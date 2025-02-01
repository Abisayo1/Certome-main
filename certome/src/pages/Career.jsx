import React from 'react'
import HeaderCareer from '../components/HeaderCareer';
import HeaderCareer2 from '../components/HeaderCareer2';
import Title from '../components/Title';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HeaderCareer3 from '../components/CareerHeader3';

const Career = () => {
    return (
        <div>
            <HeaderCareer />
            <HeaderCareer2 />
            <HeaderCareer3 />
            <Title subTitle='"Our dedication to enhancing your experience extends beyond expectations. Hear what top-tier organizations have to share."' title='"Testimonials from Our Valued Clients"' />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Career;