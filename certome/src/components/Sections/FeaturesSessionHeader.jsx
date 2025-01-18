import React from 'react';
import './FeaturesSessionHeader.css'; // Assuming you are using a CSS file for styling

const FeaturesSessionHeader = () => {
  return (
    <div className="features-session-header">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Main Content */}
      <div className="content-container">
        <h1>Infrastructure for Reward to Determined Recipients </h1>
        <p>Deliver digital certificates with a touch of professionalism and memorability.
        Opt for our personalized credential wallet feature for convenient storage of your accomplishments</p>

        {/* Buttons */}
        <div className="button-container">
          <button className="primary-button">Create a Free Account</button>
          <button className="secondary-button">Book a Demo</button>
        </div>

        {/* Paragraph Text */}
        <p className="description-text">No card Requirement | Cancel anytime | Free Technical sessions</p>

        {/* Image */}
        <div className="image-container">
          <img
            src="LogoClouds.png" // Replace with your image path
            alt="Features"
            className="features-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSessionHeader;
