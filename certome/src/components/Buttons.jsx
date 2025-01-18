import React from 'react';
import './Buttons.css'; // Import the CSS file for styling

const Buttons = ({ text, onClick }) => {
  return (
    <button className="custom-button" >
      {text}
    </button>
  );
};

export default Buttons;
