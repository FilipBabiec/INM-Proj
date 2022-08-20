import React from 'react';
import TournamentCreator from '../components/TournamentCreator/TournamentCreator';
import "./NewTournament.css"


function NewTournament() {
  return (
      <div className='ntWrapper'>
        <TournamentCreator />
      </div>
  );
}

export default NewTournament