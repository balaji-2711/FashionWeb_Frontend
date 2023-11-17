import React from "react";


function Contact() {
  return (
    //  <--Contact page details-->

    <div className="container-fluid" id="contact">
      <div className="text-center contact-hd">Contact</div>
      <div className=" contact-info">
        <div className="contact-details col-lg-4 wrapper">
          <h4 className="color-green p-2">Contact Detail's</h4>
          <div className="mobile-details">
            <span className="text-white"><b>Mobile:</b></span>
            <br />
            <span className="text-white"><b>+91 9080270660</b></span>
          </div>
          <div className="mail-details">
            <span className="text-white"><b>Mail:</b></span>
            <br />
            <span className="text-white"><b>smilewithbalaa@gmail.com</b></span>
          </div>
        </div>
        {/* <--Media link details-->  */}
        <div className="social-media col-md-6 col-lg-3 wrapper ">
          <h4 className="color-blue">Get in touch</h4>
    

          <div className="address">
          <span className="text-white"><b>Address:</b></span>
          <span className="text-white">
            <br />
            <b>Plot No.115,Goldencity,Thottagiri road</b>
            <br />
            <b>Mumbai-635 808</b>
          </span>
        </div>
        </div>

        
      </div>
      <div>&nbsp;</div>
    </div>
  );
}

export default Contact;