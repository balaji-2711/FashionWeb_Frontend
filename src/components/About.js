import React from "react";

function About() {
  return (
    <div id="about" className="pt-5">
      <div className="about" id="aboutUs">
        <div className="caption-about">
          <h3 className="about-hd ">
            <b>About Us</b>
          </h3>
          <br />
          {/* Which colour to wear on weekdays? There are certain Ayurveda colours
          that you can match with day-wise dress colour. Day-wise colours to
          wear on weekdays */}
          <h4>
            <span className="about-name ">
              <b> Which colour </b>
            </span>
            <b> to wear on weekdays? There are certain Ayurveda colours ,</b>
            <br />
            <b> that you match with day-wise</b>
            <br />
            <span className="about-name">
              <b> dress colour</b>
            </span>
            <br />
            <b>Day-wise colours to wear on weekdays.</b> <br />
            <b></b> <br /> <b></b>
          </h4>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
