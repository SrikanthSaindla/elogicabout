import React from 'react'
import './index.css'

const  Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_second">
          <div className="logo_container">
            <img
              src="https://res.cloudinary.com/srikanth143/image/upload/v1687186464/vertical-colored_2_iajwmk.svg"
              alt="logo"
              className="logo"
            />
          </div>
          <div className="list_and_button">
            <ul className="list_options">
              <li>Home</li>
              <li>Our Solution</li>
              <li>Our Services</li>
              <li>Case Studies</li>
              <li>About Us</li>
            </ul>
            <button className="button_reach">Reach Us Now</button>
          </div>
        </div>
 
      </div>
    </>
  );
}

export default  Home