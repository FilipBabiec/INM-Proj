import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { FooterContainer } from './containers/footer'
import Home from './pages/Home';
import NewTournament from './pages/NewTournament';
import Reports from './pages/Reports';
import Tournament from './pages/Tournament';
import TournamentConsole from './pages/TournamentConsole';
import './App.css';
import { Container } from './components/footer/styles/footer';
import { useState } from 'react';

function App() {

  const [tournamentName, setTournamentName] = useState();

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewTournament" element={<NewTournament />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Tournament" element={<Tournament />} />
          <Route path="/TC" element={<TournamentConsole />} />
        </Routes>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;
