import React from 'react';
import Navbar from './components/navbar/Navbar';
import { FooterContainer } from './containers/footer'
import TournamentCreator from './components/TournamentCreator/TournamentCreator';
import Home from './pages/Home';
import NewTournament from './pages/NewTournament';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <FooterContainer />
      <main className='container'>
        <TournamentCreator />
      </main>
    </React.Fragment>
  );
}

export default App;
