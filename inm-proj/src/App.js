import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { FooterContainer } from './containers/footer'
import Home from './pages/Home';
import NewTournament from './pages/NewTournament';
import Reports from './pages/Reports';
import Tournament from './pages/Tournament';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewTournament" element={<NewTournament />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Tournament" element={<Tournament />} />
        </Routes>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;
