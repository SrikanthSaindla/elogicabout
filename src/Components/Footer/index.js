import React from 'react'
import './index.css'
const  Footer = () => {
  return (
    <div className="footer_container">
      <div className="logo_container">
        <img
          src="https://res.cloudinary.com/srikanth143/image/upload/v1687273943/Group_234_ijyvjt.svg"
          alt="logo"
          className="logo_footer"
        />
        <p className="logo_para">
          We are Providing Cutting Edge solution to hardware and software
          clients across various Industries
        </p>
      </div>
      <div className="grid-container">
        <span className="grid-item">Home</span>
        <span className="grid-item">About Us</span>
        <span className="grid-item">Our Team</span>
        <span className="grid-item">Solution</span>
        <span className="grid-item">Startup Program</span>
        <span className="grid-item">Media</span>
        <span className="grid-item">Services</span>
        <span className="grid-item">career</span>
        <span className="grid-item">Privacy Policy</span>
        <span className="grid-item">Process</span>
        <span className="grid-item">our Work</span>
        <span className="grid-item">Cookie Policy</span>
      </div>

      <div className="contact_container">
        <p>Contact Us</p>
        <div className='contact_number'>
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1687273748/telephone_2_caxqqq.svg"
            alt=""
          />
          <span>+918309616283</span>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1687273748/Layer_2_rffvzt.svg"
            alt=""
          />
          <span>srikanth.saindla@eltege.io</span>
        </div>
        <p>Follow Us</p>
        <img
          src="https://res.cloudinary.com/srikanth143/image/upload/v1687273748/linkedin_ulbgc5.svg"
          alt="" className='linkdin'
        />
      </div>
    </div>
  );
}

export default  Footer