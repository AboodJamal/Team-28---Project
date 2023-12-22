import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsPage from './Pages/EventsPage';
import HelpingPage from './Pages/HelpingPage';
import ViewAllEvents from './abdullah\'s components/ViewAllEvents';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/OurEventsPage" element={<EventsPage />} />
          <Route path='/HelpingPage' element={<HelpingPage />} />
          <Route path='/ViewAllEvents' element={<ViewAllEvents />} />
          <Route index element={<HelpingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
