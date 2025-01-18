import React from "react";
import { BiLogoInstagram, BiLogoInstagramAlt, BiLogoTiktok, BiLogoTwitter, BiPhoneCall,  BiSolidEnvelope,  } from "react-icons/bi";
import {
  FaInstagramSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ContactHeader = () => {
  return (
    <div className="flex flex-col xl:flex-row max-w-[90%] my-20 mx-auto ">
      <div className="left-col w-full xl:w-[40%] text-white p-5 xl:p-10 rounded-xl bg-primary " >
        <div className="text-3xl font-semibold my-2 " >Contact Information</div>
        <div className="text-lg mb-40 " >Say something to start a live chat </div>
        <div className="contact-list text-lg " >
          <ul>
          <li className=" flex items-center my-8 " ><BiPhoneCall className="mr-2 xl:mr-10 text-2xl " /> +1 012 3456 789 </li>
          <li className=" flex items-center my-8 " ><BiSolidEnvelope className="mr-2 xl:mr-10 text-2xl " /><a href="mailto:Olawuyipeter18@gmail.com">Olawuyipeter18@gmail.com</a> </li>
          <li className=" flex items-start my-8 " ><FaMapMarkerAlt className="mr-2 xl:mr-10 text-2xl " /> 123 Dartmouth Street Boston, Massachusetts 02516 United States </li>
          </ul>
        </div>
        <div className="socials flex gap-x-10 mt-40 text-3xl " >
          <FaXTwitter/>
          <BiLogoInstagram/>
          <BiLogoTiktok/>
        </div>
      </div>
      <div className="right-col my-20 xl:my-0 p-5 sm:p-20 w-full xl:w-[60%] " >
        <div className="inputs grid sm:grid-cols-2 gap-10 ">
          <div className="flex flex-col" >
          <label className="font-bold  " htmlFor="FirstName">FirstName</label>
          <input type="text" className=" border-n border-b-2 py-2 outline-none " placeholder="John" id="FirstName" />
          </div>
          <div className="flex flex-col" >
          <label className="font-bold  " htmlFor="LastName">LastName</label>
          <input type="text" className=" border-n border-b-2 py-2 outline-none " placeholder="Doe" id="LastName" />
          </div>
          <div className="flex flex-col" >
          <label className="font-bold  " htmlFor="Email">Email</label>
          <input type="email" className=" border-n border-b-2 py-2 outline-none " placeholder="123@gmail.com" id="Email" />
          </div>
          <div className="flex flex-col" >
          <label className="font-bold  " htmlFor="PhoneNumber">PhoneNumber</label>
          <input type="text" className=" border-n border-b-2 py-2 outline-none " placeholder="+1 234 567 890" id="PhoneNumber" />
          </div>
        </div>
        
        <div className="text-lg mt-10 mb-5 font-bold" >Select Subject?</div>
          <div className="radio flex flex-wrap justify-between ">
            <div className="flex items-center " >
            <input className="mr-2 cursor-pointer accent-primary " type="radio" name="subject" id="1" />
            <label className="cursor-pointer"  htmlFor="1">General Inquiry</label>
            </div>
            <div className="flex items-center " >
            <input className="mr-2 cursor-pointer accent-primary " type="radio" name="subject" id="2" />
            <label className="cursor-pointer"  htmlFor="2">General Inquiry</label>
            </div>
            <div className="flex items-center " >
            <input className="mr-2  cursor-pointer accent-primary " type="radio" name="subject" id="3" />
            <label  className="cursor-pointer" htmlFor="3">General Inquiry</label>
            </div>
            <div className="flex items-center " >
            <input className="mr-2 cursor-pointer accent-primary " type="radio" name="subject" id="4" />
            <label className="cursor-pointer"  htmlFor="4">General Inquiry</label>
            </div>
          </div>
          <div className="message flex flex-col my-10 ">
          <label htmlFor="message">Message</label>
          <input type="text" className=" border-n border-b-2 py-2 outline-none " placeholder="Write your message" id="message" />
          </div>
      </div>
    </div>
  );
};

export default ContactHeader;
