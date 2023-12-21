import React from 'react';
import logo from '../imageEventsP/logo1.svg'
import { IoGlobeOutline } from "react-icons/io5";
import { FaWindows, FaApple } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";

function FooterEventsP() {
  return (
    <div>
      <footer className=" text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" /><img src={logo} />
                </h6>
                <p>
                  Match way these she avoids seeing death their fat off.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
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
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
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
            </div>
          </div>
        </section>
        <div className="container-fluid justify-content-between p-4 border-top">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 order-last order-md-first mb-4 mb-md-0 text-center text-md-start">
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
            <div className="col-md-6 col-lg-6 col-xl-6 order-first order-md-last mb-4 mb-md-0 text-center text-md-end">
              <a href="#!" className="text-reset d-inline mx-2 text-decoration-none">
                ©2023 Webestica All rights reserved.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterEventsP;
