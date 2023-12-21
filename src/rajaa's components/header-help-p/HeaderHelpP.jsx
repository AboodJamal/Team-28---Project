import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import right from '../imageHelpP/right.png'
import left from'../imageHelpP/left.png'
function HeaderHelpP() {
  return (
    <header className='mt-5'>
      <div className="p-5 text-center ">
        <div className="container">
          <div className="row">
            
            <div className=" img col-md-3 col-sm-12 ">
              <img src="https://smarterdegree.com/storage/2023/01/how-it-works.png"  className="img-fluid rounded" />
            </div>
            
            <div className="search col-md-6 col-sm-12" style={{marginTop:"55px"}}>
              <h1 className="mb-1 fw-bold">Hi Sam, we're here to help.</h1>
              <p className="mb-4 text-muted">Search here to get answers to your questions.</p>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-search"></i></span>
                <input type="text" className="form-control" placeholder="Search..." />
              </div>
            </div>
            
            <div className=" img col-md-3 col-sm-12">
              <img src="https://acamsmart.com/wp-content/uploads/2023/04/Contact-us-pana.svg" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHelpP;