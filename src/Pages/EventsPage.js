import React from 'react'
import DiscoverEventsCards from '../abdullah\'s components/DiscoverEventsCards'
import TopDistenationsCards from '../abdullah\'s components/TopDestinationsCards'
import { Link } from 'react-router-dom'
import MyNavbar from '../Ahmad_Components/Navbar_EventsPage/MyNavbar'
import CardsEP from '../rajaa\'s components/cards-E-P/CardsEP'
import FooterEventsP from '../rajaa\'s components/footer-events-p/FooterEventsP'
import Global from '../nosyba copmonent/globalpage2'
import Header1 from '../saleh_components/Header1'
import EventTicket from '../Ahmad_Components/Book a conference/EventTicket'

const linkButtonStyle = {
    transition: 'all 0.3s ease-in-out',
    width: 'fit-content',
    height: '40px',
    borderRadius: '50px',
    backgroundImage: 'linear-gradient(135deg, #feb692 0%, #ea5455 100%)',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    color: 'white',
    marginBottom: '10px',
    marginRight: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
};

const EventsPage = () => {
    return (
        <div style={{backgroundColor:"white"}}>
            <Header1 />
            <DiscoverEventsCards />
            <div className="container">
            <div className="row  ">
                    <div className="col-lg-5">
                        <Global  />
                    </div>
                    <div className="col-lg-5">
                        <EventTicket />
                    </div>
                </div>
            </div>
            
            <TopDistenationsCards />
            <CardsEP />
            <div className="d-flex justify-content-end mt-3">
                <Link
                    to="/HelpingPage"
                    className="btn btn-primary"
                    style={linkButtonStyle}
                >
                    Helping Page
                </Link>
            </div>
            <FooterEventsP />
        </div>
    )
}

export default EventsPage;

