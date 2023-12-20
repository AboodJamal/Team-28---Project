import React from 'react'
import { Link } from 'react-router-dom'
import HelpingPageNavBar from '../abdullah\'s components/HelpingPageNavBar'
import HeaderHelpP from '../rajaa\'s components/header-help-p/HeaderHelpP'
import PopularQuestions from '../nosyba copmonent/popularquestion'
import RecommendedTopics from '../saleh_components/RecommendedTopics'
import ArticlesList from '../Ahmad_Components/Articles_components/ArticlesList'
import Footer from '../nosyba copmonent/footerpage1'

const HelpingPage = () => {
    return (
        <>
            <HelpingPageNavBar />
            <HeaderHelpP />
            <PopularQuestions />
            <RecommendedTopics />
            <ArticlesList />
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
            <Footer/>
        </>
    )
}

export default HelpingPage