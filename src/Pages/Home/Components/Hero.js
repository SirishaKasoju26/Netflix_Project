import React from 'react';
import image from '../../../Assets/section 1/hero section.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
       <img src={image}/>

       <div className="content">
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
       </div>

       <div className="buttons">
          <Link to="/training">Try Now!</Link>
          <Link to="/contact">Launch!</Link>
       </div>
    </div>
  );
};

export default Hero