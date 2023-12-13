import CircledPhotos from "./AttendingPhotos";
import EventCard from "./EventCard";


const DiscoverEventsCards = () => {
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: "15px" }}>
                    <h1 clssName="m-0" style={{ fontSize: "25px", fontWeight: "bold" }}>Discover Events</h1>
                    <button className="btn" style={{ color: "#2794C1", fontWeight: "bold", marginTop: "7px" }}  >View all events</button>
                </div>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </div>
        </>
    );
}
// row gx-2 gx-md-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center
//row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center
export default DiscoverEventsCards;