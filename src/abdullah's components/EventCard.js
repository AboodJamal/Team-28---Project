import React, { useState } from 'react';
import CircledPhotos from './AttendingPhotos';

const EventCard = () => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
    };
    const primaryColor = 'rgba(0, 123, 255, 0.9)';
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 col mb-5">
                <div className="card h-100 position-relative">
                    <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                        Online
                    </div>
                    <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1450609283058-0ec52fa7eac4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
                        alt="..."
                    />
                    <div className="badge bg text-white d-flex align-items-center  " style={{
                        width: "fit-content", padding: "3%",
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        marginLeft: "10px",
                        backgroundColor: primaryColor,
                        borderRadius: '3px'
                    }} >
                        Spa training
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h5 className="fw-bolder">Bone thugs-n-harmony</h5>
                            <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i class="bi bi-calendar-check"></i> Mon, Sep 25, 2020 at 9:30 AM</div>
                            <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i class="bi bi-geo-alt" ></i> San Francisco</div>
                            <CircledPhotos />
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <button
                                className={`btn ${buttonClicked ? 'btn-success' : 'btn-outline-dark'} mt-auto`}
                                href="#"
                                onClick={handleButtonClick}
                                style={{
                                    transition: 'background-color 0.2s ease',
                                    color: buttonClicked ? 'white' : '#3DB341',
                                    backgroundColor: buttonClicked ? '#3DB341' : 'white',
                                    border: `1px solid #3DB341`,
                                    paddingLeft: "15%",
                                    paddingRight: "15%",
                                    borderRadius: "3px"
                                }}
                            >
                                <i className="bi bi-hand-thumbs-up-fill" style={{ color: buttonClicked ? 'white' : '#3DB341' }} /> Interested
                            </button>
                            <a href="#" className="btn btn-primary ms-2" style={{ backgroundColor: '#c7e7ff', borderColor: '#c7e7ff' }}>
                                <i className="bi bi-share-fill" style={{ color: '#0E6FEB' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default EventCard;
