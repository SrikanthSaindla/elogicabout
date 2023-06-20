import React from "react";
import "./index.css";
const Culture = () => {
  return (
    <>
      <div className="our_culture">
        <h1 className="our_culture_head">Our culture and Values</h1>
        <p className="our_culture_para">
          At elogictech Edge, We Come Together Every Day Looking Forward To The
          Next Hard Thing. Complex Challenges With Ambiguous Constraints Force
          Us Out Of Our Lanes, And This Is Where We Thrive As Engineers,
          Solutions Architects And Problem-Solvers. When We Are Forced Out Of
          Our Lanes, We Are Forced To Get Creative, Resourceful And
          Experimentative, And That Is The Space Where Great Solutions Are Born.
        </p>
        <div className="aptitue_container">
          <span className="aptitude">Attitude > Aptitude</span>
          <span className="aptitude">Willing To Learn> Experience</span>
          <span className="aptitude">Making Mistakes> Playing With safe</span>
        </div>
        <div className="culture_icons_con">
          <div className="icon_con">
            <img
              src="https://res.cloudinary.com/srikanth143/image/upload/v1687000516/val_icon_01_ljybrw.svg"
              alt="icon1  "
              className="val_icon1 icon_animation1"
            />
            <span>Find Elegant Solutions</span>
            <span>To Odd Problems</span>
          </div>

          <div className="icon_con">
            <img
              src="https://res.cloudinary.com/srikanth143/image/upload/v1687000516/val_icon_02_qdku3b.svg"
              alt="icon1"
              className="val_icon1"
            />
            <span>A Project Isn’t Done Until It Has</span>
            <span>Created Real Value</span>
          </div>

          <div className="icon_con">
            <img
              src="https://res.cloudinary.com/srikanth143/image/upload/v1687000516/val_icon_03_xodowk.svg"
              alt="icon1"
              className="val_icon1"
            />
            <span>Have Fun With The Work </span>
            <span> While Doing It</span>
          </div>

          <div className="icon_con">
            <img
              src="https://res.cloudinary.com/srikanth143/image/upload/v1687000516/val_icon_04_kloph4.svg"
              alt="icon1"
              className="val_icon1 icon_animation4"
            />
            <span>Work For The Vision, </span>
            <span> Not The Boss</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Culture;
