import React from 'react';
import './AttendingPhotos.css';

function CircledPhotos() {
    return (
        <>
            <div className="photos-and-circle">
                <div className="photos">
                    <div className="circle-photo">
                        <img
                            className="hh"
                            alt="avatar1"
                            src="https://scontent.ffjr1-2.fna.fbcdn.net/v/t39.30808-6/310927976_1213975362668142_8320853404561131857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=sVSU9n5sk60AX8LibR1&_nc_ht=scontent.ffjr1-2.fna&oh=00_AfAK0amyvXWU-qkB4ik1TC3Yd9S6iKx1v4NoWhyKGrE-Fg&oe=657F971F"
                        />
                    </div>
                    <div className="circle-photo">
                        <img
                            className="hh"
                            alt="avatar1"
                            src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/362262967_1427459524776754_8623404211282031163_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=iLWL07OAwEIAX88LeYx&_nc_ht=scontent-ams2-1.xx&oh=00_AfDWchMaT08a984KzqhNPIW-IoMJUik1T-G-Kmy4d2hd8g&oe=657B6AFC"
                        />
                    </div>
                    <div className="circle-photo">
                        <img
                            className="hh"
                            alt="avatar2"
                            src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t39.30808-6/351554674_6133920633328186_825770733599826712_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=HU-wJudj2HAAX8Oo4Gi&_nc_ht=scontent.ffjr1-4.fna&oh=00_AfDrKBho4sPNbQpZ7tV1glloHuLT5A1BG3N1hmBbQV7a2Q&oe=657A9E96"
                        />
                    </div>
                    <div className="circle">
                        <span className="number" style={{ fontSize: "10px" }} >+38</span>
                    </div>
                    <div className="attending-text" >
                        <p >are attending</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CircledPhotos;