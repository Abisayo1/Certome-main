import React from 'react';
import Footer from '../components/Footer';
import ContactHeader from '../components/ContactHeader';
import HeaderContact from '../components/HeaderContact';

const Contact = () => {
  return (
    <div className='container'>
      <HeaderContact/>
      <ContactHeader/>
      <Footer />
    </div>
  );
};

export default Contact;