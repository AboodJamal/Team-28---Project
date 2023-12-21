const Footer = () => {
  return (
    <div>
      <footer className=" bg-body-tertiary text-muted text-center text-lg-start ">
        <div className="container-fluid justify-content-between p-4 border-top">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 order-last order-md-first mb-4 mb-md-0 text-center text-md-start">
              <a href="#" className="text-reset d-inline mx-2 text-decoration-none">
                Support
              </a>
              <a href="#" className=" text-decoration-none text-reset d-inline mx-2 ">
                Docs
              </a>
              <a href="#" className=" text-decoration-none text-reset d-inline mx-2 ">
                Terms of Use
              </a>
              <a href="#" className=" text-decoration-none text-reset d-inline mx-2 ">
                Privacy & terms
              </a>
            </div>
            <div className="col-md-6 mb-4 mb-md-0 col-lg-6 col-xl-6 order-first order-md-last  text-center text-md-end">
              <a href="#" className="text-reset d-inline mx-2 text-decoration-none">
                ©2023 Webestica All rights reserved.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;