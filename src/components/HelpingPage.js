import React from 'react'
import { Link } from 'react-router-dom'
import HelpingPageNavBar from '../abdullah\'s components/HelpingPageNavBar'
import DiscoverEventsCards from '../abdullah\'s components/DiscoverEventsCards'
import TopDistenationsCards from '../abdullah\'s components/TopDestinationsCards'

const HelpingPage = () => {
    return (
        <div>
            HelpingPage
            <br></br>
            <div className="d-flex justify-content-end mt-3">
                <Link
                    to="/OurEventsPage"
                    className="btn btn-primary"
                    style={{
                        transition: 'all 0.3s ease-in-out',
                        width: 'fit-content',
                        height: '40px',
                        borderRadius: '50px',
                        backgroundImage: 'linear-gradient(135deg, #feb666 0%, #ea5445 100%)',
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
                    Events Page
                </Link>
            </div>
        </div>
    )
}

export default HelpingPage