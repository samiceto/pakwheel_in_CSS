import React from 'react';
import '../style.css'; 

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-title'>
            <h1 className='hero-title-bg'>Sell Your Car on PakWheels and Get the Best Price</h1>
        </div>
        
        <div className='hero-content'>
            <h1 className='hero-header'>Post Your Ad on PakWheels</h1>
            <p className='hero-text'><span className='checkmark'>✓</span> Post your Ad for Free in 3 Easy Steps</p>
            <p className='hero-text'><span className='checkmark'>✓</span> Get Genuine offers from Verified Buyers</p>
            <p className='hero-text'><span className='checkmark'>✓</span> Sell your car Fast at the Best Price</p>
            <button className='hero-button'>
                Post Your Ad
            </button>
        </div>

        <div className='hero-separator'>
            <h1 className='hero-separator-text'>OR</h1>
        </div>
        
        <div className='hero-content'>
            <h1 className='hero-header'>Try PakWheels Sell It For Me</h1>
            <p className='hero-text'><span className='checkmark'>✓</span> Dedicated Sales Expert to Sell your Car</p>
            <p className='hero-text'><span className='checkmark'>✓</span> We Bargain for you and share the Best Offer</p>
            <p className='hero-text'><span className='checkmark'>✓</span> We ensure Safe & Secure Transaction</p>
            <button className='hero-button-alt'>
                Register Your Car
            </button>
        </div>
    </div>
  );
}

export default Hero;
