import React from 'react';
import logo from '../imageEventsP/logo1.svg'
import { IoGlobeOutline } from "react-icons/io5";
import { FaWindows, FaApple } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";

function FooterEventsP() {
  return (
    <div>
      {/* Footer */}
      <footer className=" text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
          {/* Left */}
          
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" /><img src={logo}  />
                </h6>
                <p>
                  Match way these she avoids seeing death their fat off.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h5 className=" fw-bold mb-4 text-dark">
                  Download 
                </h5>
                <p>
                 <a href="#!" className="text-reset text-decoration-none"><IoGlobeOutline />  Web Browser</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none"> <FaWindows /> Windows</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none"> <FaApple /> macOS</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none"><CiMobile2 /> iOS & Android</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h5 className=" fw-bold mb-4 text-dark">
                  About
                </h5>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">About Social</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Security</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Customer Support</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Partners</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Careers-<span className='fw-bold'>Join Us!</span></a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h5 className=" fw-bold mb-4 text-dark">Resources</h5>

                <p>
                  <a href="#!" className="text-reset text-decoration-none">Join </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Help Center</a>
                </p>  
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Developers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Status</a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">Communities</a>
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
      <div className="d-flex justify-content-between text-center p-4 border-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
        <div className="mx-5">
           <a href="#!" className="text-reset d-inline mx-2 text-decoration-none">
            Support
           </a>
           <a href="#!" className="text-reset d-inline mx-2 text-decoration-none">
            Docs
           </a>
           <a href="#!" className="text-reset d-inline mx-2 text-decoration-none">
            Terms of Use
           </a>
           <a href="#!" className="text-reset d-inline mx-2 text-decoration-none">
            Privacy & terms
           </a>
        </div>
        <div className="mx-5">
           <a href="#" className="text-reset d-inline mx-2 text-decoration-none">
           ©2023 Webestica All rights reserved.
           </a>
        </div>
     </div>

        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default FooterEventsP;
