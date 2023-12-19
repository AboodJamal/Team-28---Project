import React from 'react'
import HelpingPageNavBar from '../abdullah\'s components/HelpingPageNavBar'
import DiscoverEventsCards from '../abdullah\'s components/DiscoverEventsCards'
import TopDistenationsCards from '../abdullah\'s components/TopDestinationsCards'
import { Link } from 'react-router-dom'

const EventsPage = () => {
    return (
        <>
            <HelpingPageNavBar />
            <DiscoverEventsCards />
            <TopDistenationsCards />
            <div className="d-flex justify-content-end mt-3">
                <Link
                    to="/HelpingPage"
                    className="btn btn-primary"
                    style={{
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
                    }}
                >
                    Helping Page
                </Link>
            </div>
        </>
    )
}

export default EventsPage