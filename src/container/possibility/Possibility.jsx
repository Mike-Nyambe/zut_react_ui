import React from 'react';
import PossibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='zictc__possibility section__padding'>
      <div className="zictc__possibility-image">
        <img src={PossibilityImage} alt="students" />
      </div>
      <div className="zictc__possibility-content">
        <h4>Request for an Application form</h4>
        <h1 className="gradient__text">Elevate Your Skills, Boost Your Career</h1>
        <p>
          Surpass Boundaries, Elevate Your Tech Mastery, Empowering You for Technological Excellence,
          Redefine Possibilities, Elevate Your Tech Skills: Empowering You to Shape the Digital Future!"
          "Unleash Your Tech Superpowers: Elevate Your Expertise and Make Waves in the Digital Realm!"
        </p>
        <h4>Zambia University of Technology</h4>
      </div>
    </div>
  )
}

export default Possibility;