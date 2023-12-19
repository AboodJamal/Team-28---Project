import React from 'react'
import EventCard from './EventCard';
import { useFireBase } from '../TeamFireBase/useFireBase';

const ViewAllEvents = () => {
    const { items } = useFireBase("discoveringEventsCards");
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5 bigcontainer" >
                <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: "15px" }}>
                    <h1 className="m-0" style={{ fontSize: "30px", fontWeight: "bold" }}>All Events</h1>
                </div>
                <div className="row gx-2 gx-md-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {items.map((item) => (
                        <EventCard key={item.id} event={item.event} date={item.date} location={item.location} blueTitle={item.blueTitle} hasRed={item.hasRed} redTitle={item.redTitle}
                            numberOfAttend={item.numberOfAttend} numberOfCircledPhotos={item.numberOfCircledPhotos}
                            coverImg={item.coverImg}
                            circledPhoto1={item.circledPhoto1}
                            circledPhoto2={item.circledPhoto2}
                            circledPhoto3={item.circledPhoto3}
                            circledPhoto4={item.circledPhoto4} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ViewAllEvents