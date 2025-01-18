import React, { useState } from 'react';
import './FeaturesSession3.css';

const FeaturesSession3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { title: 'Feature 1', description: 'Description for feature 1', link: 'Learn more' },
    { title: 'Feature 2', description: 'Description for feature 2', link: 'Learn more' },
    { title: 'Feature 3', description: 'Description for feature 3', link: 'Learn more' },
    { title: 'Feature 4', description: 'Description for feature 4', link: 'Learn more' },
    { title: 'Feature 5', description: 'Description for feature 5', link: 'Learn more' },
    { title: 'Feature 6', description: 'Description for feature 6', link: 'Learn more' },
  ];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='ttxt'>
      <h2>Coming Soon</h2>
      <p>Follow us as we release these features</p>
      <div className="features-session">
        <div className="features-carousel-wrapper">
          <div
            className="features-carousel"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }} // Slide effect for four cards visible
          >
            {cards.map((card, index) => (
              <div key={index} className="feature-card">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <small>{card.link}</small>
              </div>
            ))}
          </div>
          <div className="carousel-navigation-bottom-left">
            <button className="carousel-btn" onClick={handlePrev} disabled={currentIndex === 0}>
              &#8592; {/* Left arrow */}
            </button>
            <button className="carousel-btn" onClick={handleNext} disabled={currentIndex === cards.length - 1}>
              &#8594; {/* Right arrow */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSession3;
