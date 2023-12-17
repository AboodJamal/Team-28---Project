import React from 'react';
import './AttendingPhotos.css';

function CircledPhotos(props) {
    if (props.numberOfCircledPhotos == 3) {
        return (
            <>
                <div className="photos-and-circle-cont">
                    <div className="circled-photos">
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo1}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo2}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar2"
                                src={props.photo3}
                            />
                        </div>
                        <div className="one-circle">
                            <span className="att-number" style={{ fontSize: "10px", color: "white" }}>+{props.numberOfAttend}</span>
                        </div>
                        <div className="attending-text" >
                            <p >are attending</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    if (props.numberOfCircledPhotos == 4) {
        return (
            <>
                <div className="photos-and-circle-cont">
                    <div className="circled-photos">
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo1}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo2}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar2"
                                src={props.photo3}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar2"
                                src={props.photo4}
                            />
                        </div>
                        <div className="one-circle">
                            <span className="att-number" style={{ fontSize: "10px", color: "white" }}>+{props.numberOfAttend}</span>
                        </div>
                        <div className="attending-text" >
                            <p >are attending</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    if (props.numberOfCircledPhotos == 2) {
        return (
            <>
                <div className="photos-and-circle-cont">
                    <div className="circled-photos">
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo1}
                            />
                        </div>
                        <div className="each-circle-photo">
                            <img
                                className="hh"
                                alt="avatar1"
                                src={props.photo2}
                            />
                        </div>
                        <div className="one-circle">
                            <span className="att-number" style={{ fontSize: "10px", color: "white" }}>+{props.numberOfAttend}</span>
                        </div>
                        <div className="attending-text" >
                            <p >are attending</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}


export default CircledPhotos;




