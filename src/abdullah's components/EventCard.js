import React, { useState } from 'react';
import CircledPhotos from './AttendingPhotos';

const EventCard = (props) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
    };
    const primaryColor = 'rgba(0, 123, 255, 1.0)';
    if (props.numberOfCircledPhotos == 3) {
        if (props.hasRed) {
            return (
                <>
                    <div className="col-12 col-md-6 col-lg-4 col mb-5">
                        <div className="card h-100 position-relative">
                            <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                                {props.redTitle}
                            </div>  
                            <img
                                className="card-img-top"
                                src={props.coverImg}
                                alt="..."
                            />
                            <div className="badge bg text-white d-flex align-items-center" style={{
                                width: "fit-content", padding: "3%",
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                marginLeft: "10px",
                                backgroundColor: primaryColor,
                                borderRadius: '3px'
                            }} >
                                {props.blueTitle}
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.event}</h5>
                                    <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-calendar-check"></i> {props.date}</div>
                                    <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-geo-alt" ></i> {props.location}</div>
                                    <CircledPhotos photo1={props.circledPhoto1} photo2={props.circledPhoto2} photo3={props.circledPhoto3} numberOfCircledPhotos={props.numberOfCircledPhotos} numberOfAttend={props.numberOfAttend}/>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
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
        }
        else {
            return (
                <>
                    <div className="col-12 col-md-6 col-lg-4 col mb-5">
                        <div className="card h-100 position-relative">
                            <img
                                className="card-img-top"
                                src={props.coverImg}
                                alt="..."
                            />
                            <div className="badge bg text-white d-flex align-items-center" style={{
                                width: "fit-content", padding: "3%",
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                marginLeft: "10px",
                                backgroundColor: primaryColor,
                                borderRadius: '3px'
                            }} >
                                {props.blueTitle}
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.event}</h5>
                                    <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-calendar-check"></i> {props.date}</div>
                                    <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-geo-alt" ></i> {props.location}</div>
                                    <CircledPhotos photo1={props.circledPhoto1} photo2={props.circledPhoto2} photo3={props.circledPhoto3} numberOfCircledPhotos={props.numberOfCircledPhotos} numberOfAttend={props.numberOfAttend}/>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
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
        }
    }
    else if (props.hasRed && props.numberOfCircledPhotos == 2) {
        return (
            <>
                <div className="col-12 col-md-6 col-lg-4 col mb-5">
                    <div className="card h-100 position-relative">
                        <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                            {props.redTitle}
                        </div>
                        <img
                            className="card-img-top"
                            src={props.coverImg}
                            alt="..."
                        />
                        <div className="badge bg text-white d-flex align-items-center" style={{
                            width: "fit-content", padding: "3%",
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            marginLeft: "10px",
                            backgroundColor: primaryColor,
                            borderRadius: '3px'
                        }} >
                            {props.blueTitle}
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="fw-bolder">{props.event}</h5>
                                <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-calendar-check"></i> {props.date}</div>
                                <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-geo-alt" ></i> {props.location}</div>
                                <CircledPhotos photo1={props.circledPhoto1} photo2={props.circledPhoto2} numberOfCircledPhotos={props.numberOfCircledPhotos} numberOfAttend={props.numberOfAttend} />
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
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
    }
    else if (props.hasRed && props.numberOfCircledPhotos == 4) {
        return (
            <>
                <div className="col-12 col-md-6 col-lg-4 col mb-5">
                    <div className="card h-100 position-relative">
                        <div className="badge bg-danger text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
                            {props.redTitle}
                        </div>
                        <img
                            className="card-img-top"
                            src={props.coverImg}
                            alt="..."
                        />
                        <div className="badge bg text-white d-flex align-items-center" style={{
                            width: "fit-content", padding: "3%",
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            marginLeft: "10px",
                            backgroundColor: primaryColor,
                            borderRadius: '3px'
                        }} >
                            {props.blueTitle}
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="fw-bolder">{props.event}</h5>
                                <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-calendar-check"></i> {props.date}</div>
                                <div className="fw" style={{ fontSize: "14px", color: "gray" }}> <i className="bi bi-geo-alt" ></i> {props.location}</div>
                                <CircledPhotos photo1={props.circledPhoto1} photo2={props.circledPhoto2} photo3={props.circledPhoto3} photo4={props.circledPhoto4} numberOfCircledPhotos={props.numberOfCircledPhotos} numberOfAttend={props.numberOfAttend}/>
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent ">
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
    }

};

export default EventCard;
