import React from 'react'
import './CompanySessionSection4.css'; // Create a separate CSS file for styling

const CompanySessionSection4 = () => {
  return (
    <div className="company-session-section4">
      <div className="card">
      <div className="left-column">
      <img
            src="/red star.png"
            alt="Right Column Image"
            className="redstar"
          />
          <h2>WHY CHOOSE US ?</h2>
          <p>With Knowledge, Skills & Hard Work
We have achieved the #1 position in the digital credentialing domain. We stay true to our core values and connect potential candidates with opportunities. Our strongly built robust platform leaves no stone unturned to ensure credential immutability.
Your road to success!
Exhibit the digital credentials online to establish yourself as an industry expert. Our certificates & badges come with an ‘Add to Linkedin’ button for direct social sharing.</p>
<img
            src="/blue zigzag.png"
            alt="Right Column Image"
            className="blueZigZag"
          />
          <div className="left-background left-background-1"></div>
          <div className="left-background left-background-2"></div>
        </div>

        <div className="right-column">
          <img
            src="/right_image.png"
            alt="Right Column Image"
            className="right-image"
          />
          <div className="right-background right-background-1"></div>
          <div className="right-background right-background-2"></div>
        </div>
    
      </div>
    </div>
  );
};

export default CompanySessionSection4;
