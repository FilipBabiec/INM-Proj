import React, { Component } from 'react'
import Counter from '../functional/Counter';
import './TournamentCreator.css';
import { Button } from '../functional/Button';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
// import firebase from '../../firebase';

class TournamentCreator extends Component {
  state = {
    name: '',
    rank: 3,
    teamNumber: 8,
    courts: 1,
    teams: [
      { id: 0, name: 'Empty' },
      { id: 1, name: 'Empty' },
      { id: 2, name: 'Empty' },
      { id: 3, name: 'Empty' },
      { id: 4, name: 'Empty' },
      { id: 5, name: 'Empty' },
      { id: 6, name: 'Empty' },
      { id: 7, name: 'Empty' },
      { id: 8, name: 'Winner match1' },
      { id: 9, name: 'Winner match2' },
      { id: 10, name: 'Winner match3' },
      { id: 11, name: 'Winner match4' },
      { id: 12, name: 'Winner semifinal1' },
      { id: 13, name: 'Winner semifinal2' },
      { id: 14, name: 'Winner' }
    ],
    scores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    let teams = [...this.state.teams];
    let team = { ...teams[val.target.id] }
    team.name = val.target.value;
    teams[val.target.id] = team;
    this.setState({ teams })
  }

  submitTournament = () => {
    if (this.state.name === '')
      alert("Tournament name needed!");
    else {
      if (true) {
        this.setState({ name: '' })
        this.setState({ rank: 3 })
        this.setState({ courts: 1 })
        this.setState({ teamNumber: 8 })
        this.setState({
          teams: [
            { id: 0, name: 'Empty' },
            { id: 1, name: 'Empty' },
            { id: 2, name: 'Empty' },
            { id: 3, name: 'Empty' },
            { id: 4, name: 'Empty' },
            { id: 5, name: 'Empty' },
            { id: 6, name: 'Empty' },
            { id: 7, name: 'Empty' },
            { id: 8, name: 'Winner match1' },
            { id: 9, name: 'Winner match2' },
            { id: 10, name: 'Winner match3' },
            { id: 11, name: 'Winner match4' },
            { id: 12, name: 'Winner semifinal1' },
            { id: 13, name: 'Winner semifinal2' }
          ]
        })
        try {
          const docRef = addDoc(collection(db, "Tournaments"), {
            name: this.state.name,
            rank: this.state.rank,
            courts: this.state.courts,
            teams: this.state.teams,
            scores: this.state.scores,
          });
          console.log("Tournament created with ID: ", docRef.id);
          alert("Tournament created!");
        } catch (e) {
          console.log("Error adding document: ", e);
          alert("Error creating tournament!")
        }
      }

    }
  }

  render() {
    return (
      <div className='newTournamentWrapper'>
        <h1 className='tournamentCreatorTitle'><i className="fa-solid fa-volleyball"></i>Create your tournament<i className="fa-solid fa-volleyball"></i></h1>
        <div className='column'>
          <h2>Enter name of the tournament:  </h2><input type="text" value={this.state.name} onChange={this.setName} placeholder='Tournament name' />
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
            {[...Array(this.state.teamNumber)].map((e, i) => <span key={i}><input value={this.state.teams[i].name} className='teamNameInputs' type="text" id={i} onChange={this.setTeam} placeholder='Team name' /></span>)}
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
