import React, { Component, useState } from 'react'
import Counter from '../functional/Counter';
import './TournamentCreator.css';
import { Button } from '../functional/Button';
import firebase from '../../firebase';
import { Router } from 'react-router-dom';
// import { notesRef } from '../../firebase'

class TournamentCreator extends Component {
  state = {
    name: undefined,
    rank: 3,
    teamNumber: 8,
    courts: 1,
    teams: [
      { id: 0, name: undefined },
      { id: 1, name: undefined },
      { id: 2, name: undefined },
      { id: 3, name: undefined },
      { id: 4, name: undefined },
      { id: 5, name: undefined },
      { id: 6, name: undefined },
      { id: 7, name: undefined }
    ]
  }

  handleIncrementRank = () => {
    if (this.state.rank < 5) this.setState({ rank: this.state.rank + 1 });
  };

  handleDecrementRank = () => {
    if (this.state.rank > 1) this.setState({ rank: this.state.rank - 1 });
  };

  handleIncrementCourt = () => {
    this.setState({ courts: this.state.courts + 1 });
  };

  handleDecrementCourt = () => {
    if (this.state.courts > 1) this.setState({ courts: this.state.courts - 1 });
  };

  handleIncrementTeams = () => {
    if (this.state.teamNumber < 8) this.setState({ teamNumber: this.state.teamNumber + 1 });
  };

  handleDecrementTeams = () => {
    if (this.state.teamNumber > 4) this.setState({ teamNumber: this.state.teamNumber - 1 });
  };

  setName = (val) => {
    this.setState({ name: val.target.value })
  }

  setTeam = (val) => {
    console.log(val.target.id)
    let teams = [...this.state.teams];
    let team = {...teams[val.target.id]}
    team.name = val.target.value;
    teams[val.target.id] = team;
    this.setState({ teams })
  }


  render() {
    return (
      <div className='tournamentWrapper'>
        <h1 className='tournamentCreatorTitle'><i className="fa-solid fa-volleyball"></i>Create your tournament<i className="fa-solid fa-volleyball"></i></h1>
        <div className='column'>
          <h2>Enter name of the tournament:  </h2><input type="text" onChange={this.setName} placeholder='Tournament name' />
        </div>
        <hr className="line" />
        <div className='column'>
          <div className='row'>
            <h2>Tournament rank: </h2>
            <Counter onIncrement={this.handleIncrementRank} onDecrement={this.handleDecrementRank} />
          </div>
          <div>{[...Array(this.state.rank)].map((e, i) => <span key={i}><i className="fa-solid fa-star"></i></span>)}</div>
        </div>
        <hr className="line" />
        <div className='column'>
          <div className='row'>
            <h2 className="counters">Number of availible courts: </h2>
            <Counter onIncrement={this.handleIncrementCourt} onDecrement={this.handleDecrementCourt} />
          </div>
          <div className='number'>{this.state.courts}</div>
        </div>
        <hr className="line" />
        <div className='column'>
          <div className='row'>
            <h2 className="counters">Number of teams: </h2>
            <Counter onIncrement={this.handleIncrementTeams} onDecrement={this.handleDecrementTeams} />
          </div>
          <div className='number'>{this.state.teamNumber}</div>
        </div>
        <hr className="line" />
        <div className='column'>
          <div className='row'>
            <h2 className="counters">Team names: </h2>
          </div>
          <div className='teamNameInputs'>
            {[...Array(this.state.teamNumber)].map((e, i) => <span key={i}><input className='teamNameInputs' type="text" id={i} onChange={this.setTeam} placeholder='Team name' /></span>)}
          </div>
        </div>
        <div className='column'>
          <Button onClick={this.submitTournament}>Create</Button>
        </div>
        <hr className="line" />
      </div>
    )
  }
}

export default TournamentCreator
