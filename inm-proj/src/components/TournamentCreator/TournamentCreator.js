import React, { Component } from 'react'
import Counter from '../functional/Counter';
import './TournamentCreator.css';

class TournamentCreator extends Component {
  state = { name: undefined, rank: 3, teamNumber: 8, courts: 1 }

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
    if (this.state.teamNumber > 1) this.setState({ teamNumber: this.state.teamNumber - 1 });
  };

  setName = (val) => {
    this.setState({ name: val.target.value })
  }

  render() {
    return (
      <div className='tournamentWrapper'>
        <h1 className='tournamentCreatorTitle'><i className="fa-solid fa-volleyball"></i>Create your tournament<i className="fa-solid fa-volleyball"></i></h1>
        <div className='column'>
          <h2>Enter name of the tournament:  </h2><input type="text" onChange={this.setName} placeholder='Tournament name'/>
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
          <div className='teamNameInputs'>{[...Array(this.state.teamNumber)].map((e, i) => <div key={i}><input className='inputTeam' type="text" onChange={this.getTeamName} placeholder='Team name'/></div>)}</div>
        </div>
        <div className='column'>
        <button><a href="#" class="submitButton">Submit</a></button>
        </div>
        <hr className="line" />
      </div>
    )
  }
}

export default TournamentCreator
