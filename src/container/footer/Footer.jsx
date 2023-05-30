import React from 'react';
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import footerLogo from '../../assets/logo.png'
import './footer.css';

const Footer = () => {
  return (
    <div className="zictc__footer section__padding">
      <div className="zictc__footer-links">
        <div className="zictc__footer-links__logo">
          <img src={footerLogo} alt="logo" />
          <p>The school motto goes here</p>
        </div>
        <div className="zictc__footer-links__div">
          <h4>Quick Links</h4>
          <p>Procurement</p>
          <p>Admissions</p>
          <p>Our Programs</p>
          <p>Contact</p>
        </div>
        <div className="zictc__footer-links__div">
          <h4>Contacts</h4>
          <p>+260-964-492551</p>
          <p>+260-979-424200</p>
          <p>info@zut.edu.zm</p>
        </div>
        <div className="zictc__footer-links__div">
          <h4>Quick Links</h4>
          <p>Plot 2983 Kalewa Road, Northrise  Ndola, Copperbelt, Zambia. 10101</p>
          <p>P.O.Box 3410</p>
        </div>
      </div>
      <div className="zictc__footer-bottom">
        <div className="zictc__footer-bottom-socials">
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaTwitter /></a>
          <a href='#'><FaInstagram /></a>
          <a href='#'><FaLinkedinIn /></a>
        </div>
        <div className="zictc__footer-bottom-copyright"> 
          <p>&copy;2023 ZUT. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;