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
                            src="https://scontent.ffjr1-5.fna.fbcdn.net/v/t39.30808-6/358616236_267628379534981_7244717483181487991_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=HSx9LQDN7MwAX_OvdLB&_nc_ht=scontent.ffjr1-5.fna&oh=00_AfDImewBy0mg2X-gtPc0ZfDpHvOPKqsYjICIPIxiThjXPg&oe=657C327F"
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