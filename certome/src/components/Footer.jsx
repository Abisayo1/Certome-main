import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/certome_logo.png'; 
import TikTok from '../assets/TikTok.png';
import TwitterIcon from '../assets/twitter.png';
import InstagramIcon from '../assets/instagram.png';
import LinkedInIcon from '../assets/instagram.png';

function Footer() {
  return (
    <footer className='flex flex-wrap justify-center md:justify-between mt-40 mb-20 mx-5 gap-20'>
      <div className='flex md:block justify-center md:justify-start w-full md:w-auto'>
        <img src={Logo} className='w-40' alt="Certome Logo" />
      </div>
      <div className='grid grid-cols-2 gap-x-10 gap-y-5 md:flex flex-1 flex-wrap justify-evenly w-full md:w-auto'>
        <div className='flex flex-col items-start'>
          <span className="header my-3 font-MontserratBold text-2xl">Quick Links</span>
          <div className="contents text-lg">
            <Link to='/' className='my-1'>Features</Link>
            <Link to='/' className='my-1'>Company</Link>
            <Link to='/' className='my-1'>Pricing</Link>
            <Link to='/' className='my-1'>Blog</Link>
            <Link to='/' className='flex items-center'>Career <div className='bg-black w-1 h-1 rounded-full mx-2'></div> <span className='text-lg text-[red] font-semibold'>We are Hiring!</span></Link>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <span className="header my-3 font-MontserratBold text-2xl">Industries</span>
          <div className="contents text-lg">
            <Link to='/' className='my-1'>E-Learning Platforms</Link>
            <Link to='/' className='my-1'>Government Organizations</Link>
            <Link to='/' className='my-1'>Associations</Link>
            <Link to='/' className='my-1'>School</Link>
            <Link to='/' className='my-1'>Professional Training</Link>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <span className="header my-3 font-MontserratBold text-2xl">Help & Support</span>
          <div className="contents text-lg">
            <Link to='/' className='my-1'>FAQ</Link>
            <Link to='/' className='my-1'>Contact us</Link>
            <Link to='/' className='my-1'>Terms of use</Link>
            <Link to='/' className='my-1'>Cookie Policy</Link>
            <Link to='/' className='my-1'>Privacy Policy</Link>
            <Link to='/' className='my-1'>Refund Policy</Link>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg my-4 text-black text-opacity-60">Follow us on</span>
          <div className="socials flex gap-4 md:flex-col">
            <Link to='/' ><img src={InstagramIcon} alt="instagram_icon" /></Link>
            <Link to='/' ><img src={TwitterIcon} alt="twitter_icon" /></Link>
            <Link to='/' ><img src={TikTok} alt="tiktok_icon" /></Link>
            <Link to='/' ><img src={LinkedInIcon} alt="linkedin_icon" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
