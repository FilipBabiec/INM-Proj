import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { FooterContainer } from '../containers/footer'
import TournamentCreator from '../components/TournamentCreator/TournamentCreator';


function NewTournament() {
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