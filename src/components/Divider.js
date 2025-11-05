import React from 'react';
import ScrollingText from './ScrollingText';

const Divider = ({ withText = false, text = '', bgClass = 'bg-primary', textClass }) => {
  if (withText) {
    return (
      <section className={`py-0 ${bgClass} overflow-hidden`}>
        <div className="tilted-divider my-8"></div>
        <ScrollingText 
          text={`/ ${text} `} 
          direction="right"
          textClass={textClass}
        />
        <ScrollingText 
          text={`/ ${text} `} 
          direction="left"
          className="-mt-8"
          textClass={textClass}
        />
        <div className="tilted-divider my-8" style={{ transform: 'rotate(2deg)' }}></div>
      </section>
    );
  }

  return (
    <section className={`py-8 ${bgClass}`}>
      <div className="tilted-divider"></div>
    </section>
  );
};

export default Divider;

