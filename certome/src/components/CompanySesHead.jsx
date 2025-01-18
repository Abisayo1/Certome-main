import React from 'react';// Import the CSS for styling

const CompanySesHead = () => {
  return (
    <div className="my-12 sm:ml-12 max-w-[800px] text-left min-h-[50vh] p-5 " style={{backgroundImage: "url('./badge.png')", backgroundPosition: 'top left', backgroundRepeat: 'no-repeat'}} >
      <p className=' text-4xl font-MontserratBold mb-10 ' >Certome: A simplified & Trusted Digital Certification Platform</p>      
      <p className=' text-2xl my-5 ' >Bridging the skills gap. Automating digital certification process. Streamlined workforce management.</p>
      <p className='text-lg' >Certome is not just a digital credentials platform, it is a pioneer in the way certificates, badges, transcripts, and diplomas are issued and managed. We have come a long way since the introduction of Mozilla Open Badges in 2011 and are dedicated to constructing a robust platform that we wholeheartedly believe in. We are set on a mission to empower individuals and organizations with our secure and verifiable digital credentials.</p>
    </div>
  );
};

export default CompanySesHead;
