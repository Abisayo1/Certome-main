import React from 'react';
import Rectangle from './Sections/Rectangle';

const CompanySessionSection3 = () => {
  return (
    <div className="company-session-section3 px-4 py-8 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        {/* First Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
          <p className="text-gray-700">
            Amidst the growing automation and widening skills gap, we advocate for lifelong learning, career progress, and professional growth by harnessing the power of digital certificates. We envision establishing a platform where certificate creation, issuing, managing, and storing, the entire cycle can be taken care of. We work hard to eliminate credential forgery and create a sense of security and trust among issuers and recipients. We are a platform that supports the truth and tracks every move made in the credentialing pathway.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">A Seamless Platform</h2>
          <p className="text-gray-700">
            We deliver an impeccable user experience by combining intuitive platform design with powerful features. Our scalable and customizable digital credentials platform meets credentialing needs of educational institutions, professional associations, and training providers. CertifyMe operates using a robust system that enables you to issue and track digital credentials, automate processes, and streamline verification, all while enhancing the credibility and value of your credentials. Our unrelenting commitment to innovation and excellence continues to push the boundaries of digital credentialing solutions.
          </p>
        </div>
      </div>

      {/* Rectangular Image beneath both columns */}
      <div className="mt-8">
        <Rectangle />
      </div>
    </div>
  );
}

export default CompanySessionSection3;
