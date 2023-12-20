import React from 'react';

function DestinationCard(props) {
    return (
        <div className="col-6 col-md-6 col-lg-4 mb-4">
            <div className="card position-relative" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                <a href='#'>
                    <img
                        className="card-img-top"
                        src={props.imgLink}
                        alt="..."
                        style={{ borderRadius: '6px', width: '100%', height: '270px', objectFit: 'cover' }}
                    />
                </a>
                <div className="position-absolute bottom-0 start-0 p-2 mb-2" style={{ color: 'white' }}>
                    <p className="text-light m-0 mb-1" style={{ fontSize: "20px", fontWeight: "bold" }} >{props.title}</p>
                    <p className="text-light m-0" style={{ fontSize: "12px" }}>{props.underTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
