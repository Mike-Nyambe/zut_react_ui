import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Degree Programs',
    text: 'Elevate Your Career Trajectory with Our Comprehensive Degree Program: Your Path to Success Starts Here'
  },
  {
    title: 'Diploma Programs',
    text: 'Embrace the Power of Education: Our Diploma Program Paves the Way to Uncharted Success!'
  },
  {
    title: 'Certificatations',
    text: 'Unlock New Opportunities with Our Accredited Certifications: Empowering Your Professional Journey'
  },
  {
    title: 'Professional',
    text: 'Transform Your Career, Earn Your Professional Certifications: Opening New Avenues of Opportunity'
  }

]
const Features = () => {
  return (
   <div className="zictc__features section__padding">
      <div className="zictc__features-heading">
        <h1 className="gradient__text">
          Gain the Competitive Edge, Excel in Your Field with Our Expert-Led Courses
        </h1>
        <p>
          Apply Now
        </p>
      </div>
      <div className="zictc__features-container">
          {
            featuresData.map((item, index)=>(
              <Feature title={item.title} text={item.text} key={item.title + index} />
            ))
          }
      </div>
   </div>
  )
}

export default Features;