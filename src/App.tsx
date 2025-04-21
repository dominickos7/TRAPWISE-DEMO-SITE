import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeadCapturePage from './pages/LeadCapturePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<LeadCapturePage />} />
      </Routes>
    </Router>
  );
}

export default App;