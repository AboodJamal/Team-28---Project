import React from 'react';
import './EventTicket.css';
import avatarImage from '../Book a conference/pic/qr.png';

const EventTicket = () => {
    return (
        <div>
            <div className="maincontainer"> 
            <p className='bookre'> 
            Book a conference
            </p>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="date-time">
                            <h6 className="time">Date</h6>
                            <span className="font">12 June, 2022</span>
                        </div>

                        <div className="date-time S">
                            <h6 className="time">Time</h6>
                            <span className="font">🌞 Morning 10AM</span>
                        </div>

                        <div className="address">
                            <h6 className="time">Address</h6>
                            <span className="font">2492 Centennial NW, Acworth, GA, 30102</span>
                        </div>

                        <button type="button" className="btn btn share">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share"
                                viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3">
                                </path>
                            </svg>                        Share
                        </button>
                    </div>

                    <div className="col text-right">
                        <div className="qr-code">
                            <img src={avatarImage} alt="QR" />
                        </div>
                        <button type="button" className="btn btn-primary book" >Book now</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default EventTicket;
