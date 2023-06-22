import React from "react";
import './index.css'
import NumberCounter from "number-counter";

const Section = () => {
  return (
    <>
      <div className="who_are_we">
        <h1 className="who_are_heading">Who are we</h1>
        <p className="who_are_para">
          We Are A Team Of Engineers, Designers And Solutions Architects Who Aim
          To Tackle Challenges And Develop Solutions That Don’t Exist Yet. We
          Provide Design, Engineering, Development, Testing And Validation
          Services To Innovators In The Consumer Robotics, Electronics, Iot And
          Automation Spaces.
        </p>
      </div>
      <div className="image_icons">
        <div className="globe ">
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1686981627/globe_2_kbhp5n.svg"
            alt="globe"
          />
          <span className="number_count">
            <NumberCounter end={4} start={0} delay="2"  />
          </span>
          <span className="icon_message">Worldwide Presence</span>
        </div>

        <div className="globe">
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1686981626/rocket_ofod4l.svg"
            alt="globe"
          />
          <span className="number_count">
            <NumberCounter end={5} start={0} delay="2"  />
          </span>
          <span className="icon_message">Successful Deployments</span>
        </div>

        <div className="globe">
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1686981626/user_2_lgqebe.svg"
            alt="globe"
          />
          <span className="number_count">
            <NumberCounter end={10} start={0} delay="3"  />
          </span>
          <span className="icon_message">Diverse Clients</span>
        </div>

        <div className="globe">
          <img
            src="https://res.cloudinary.com/srikanth143/image/upload/v1686981626/cpu_tvawfc.svg"
            alt="globe"
          />
          <span className="number_count">
            <NumberCounter end={20} start={0} delay="4" preFix="+" />
          </span>
          <span className="icon_message">Years Of Industry Experience</span>
        </div>
      </div>
      <div className="mission_vision">
        <div className="mission-container">
          <div className="mission">
            <h1 className="mission_heading">Missons</h1>
            <p className="mission_para">
              To Be A One-Stop-Shop Expertise & Service Partner To Emerging Tech
              Creators And Product Developers Looking To Take Innovative
              Concepts To Fruition And Maturity.
            </p>
          </div>
        </div>
        <div className="vision-container">
          <div className="vision">
            <h1 className="mission_heading">Vision</h1>
            <p className="mission_para">
              A World Where Technology Creators And Innovators Have Ready Access
              To Skills, Expertise And Support To Solve Engineering And
              Technology Challenges At A Pace That Keeps Up With Constantly
              Evolving Business Goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
