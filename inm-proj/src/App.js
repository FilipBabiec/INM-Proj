import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { FooterContainer } from './containers/footer'
import TournamentCreator from './components/TournamentCreator/TournamentCreator';
import Home from './pages/Home';
import NewTournament from './pages/NewTournament';
import Reports from './pages/Reports';
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
        </Routes>
      </Router>
      <FooterContainer />
    </>
  );
}

export default App;
