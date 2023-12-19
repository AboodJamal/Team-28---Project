import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import EventsPage from './components/EventsPage';
import HelpingPage from './components/HelpingPage';
import ViewAllEvents from './abdullah\'s components/ViewAllEvents';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/OurEventsPage" element={<EventsPage />} />
          <Route path='/HelpingPage' index element={<HelpingPage />} />
          <Route path='/ViewAllEvents' index element={<ViewAllEvents />} />
          <Route index element={<HelpingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
