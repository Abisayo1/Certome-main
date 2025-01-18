import React, { useState } from "react";
import "./FeaturesSessionSection2.css";

const FeaturesSessionSection2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // List of numbered items with visible text and descriptions on hover
  const listItems = [
    { number: 1, text: "Track Events", description: "Track your events anywhere, anytime." },
    { number: 2, text: "Credentials", description: "Track your events anywhere, anytime." },
    { number: 3, text: "Participants", description: "Track your events anywhere, anytime." },
    { number: 4, text: "Track Activities", description: "Track your events anywhere, anytime." }
  ];

  return (
    <div className="features-session-section2">
      <div className="cardss">
        <h1>An Infrastructure for Reward Platform<br></br></h1>
        <p><br></br>Deliver digital certificates with a touch of professionalism and memorability.
        <br></br></p>

        {/* Two-columnss content starts here */}
        <div className="cardss-content">
          {/* Left columnss with the numbered list */}
          <div className="left-columnss">
            <ol className="numbered-list">
              {listItems.map((item) => (
                <li
                  key={item.number}
                  className="list-item"
                  onMouseEnter={() => setHoveredItem(item.number)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="circle">{item.number}</div>
                  <span className="item-text">{item.text}</span>
                  {/* Reveal description when hovered */}
                  {hoveredItem === item.number && (
                    <div className="description">{item.description}</div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Right columnss with the image */}
          <div className="right-columnss">
            <img
              src="Organization Dashboard.png"
              alt="Description"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSessionSection2;
