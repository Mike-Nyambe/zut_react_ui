import React from 'react';
import ai from '../../assets/ai.png'
import './header.css';

const Header = () => {
  return (
      <div className="app__header section__padding">
        <div className="app__header-content">
          <h1 className="gradient__text">Accelerate Your Technology Journey</h1>
          <p>
            To Provide Training and Solutions That Produce Graduates with Outstanding Technological 
            Skills in Southern Africa through an Enabling Learning Environment.           
          </p>
          <div className="app__header-content__search">
            <input type="text" placeholder="search for a program" />
            <button type="button">search</button>
          </div>
        </div> 
        <div className="app__header-image">
          <img src={ai} alt="graduating person" />
        </div>
      </div>
  )
}

export default Header;