import React from 'react';
import '../App.css'; // Assuming global styles
import { Button } from './button'; // Assuming Button component is correctly imported
import './HeroSection.css'; // HeroSection-specific styles

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Justice delayed is Justice denied</h1>
      <p>Fight For Justice</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline' buttonSize='btn--large'>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
