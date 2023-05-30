import React from 'react';
import './studentStatus.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='student__status section__margin'>
        <div className="student__status-feature">
          <Feature  
            title="Why Us?" 
            text='World class learning atmosphere which leads students to achieve worthwhile, meaningful outstanding  goals without spending inordinate time and energy.
            The college has been represented with high-quality education with intellectual penetration in  Research, Business, Technology, and Engineering thereby preparing students with a career for a life time.' 
          />
        </div>
        <div className="student__status-heading">
          <h1 className="gradient__text">View our innovative students and Innovations</h1>
          <p>VIew our Innovations</p>
        </div>
        <div className="student__status-container">
          <div className="student__status-container-heading">
            <div />
            <h2>I Am A</h2>
          </div>
          <div className="student__status-container-link">
            <a href="">prospective student</a>
            <a href="">current student</a>
            <a href="">alumini student</a>
          </div>
        </div>
    </div>
  )
}

export default WhatGPT3;