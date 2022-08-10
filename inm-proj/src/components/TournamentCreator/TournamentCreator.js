import React, { Component } from 'react'
import Counter from '../functional/Counter';

class TournamentCreator extends Component {
  state = { name: undefined, rank: 3, teamNumber: 16, courts: 1 }

  handleIncrementRank = () => {
    if (this.state.rank < 5) this.setState({ rank: this.state.rank + 1});
  };

  handleDecrementRank = () => {
    if (this.state.rank > 1) this.setState({ rank: this.state.rank - 1});
  };

  handleIncrementCourt = () => {
    this.setState({ courts: this.state.courts + 1});
  };

  handleDecrementCourt = () => {
    if (this.state.courts > 1) this.setState({ courts: this.state.courts - 1});
  };

  handleIncrementTeams = () => {
    if (this.state.teamNumber < 16) this.setState({ teamNumber: this.state.teamNumber + 1});
  };

  handleDecrementTeams = () => {
    if (this.state.teamNumber > 8) this.setState({ teamNumber: this.state.teamNumber - 1});
  };

  setName = (val) => {
    this.setState({ name: val.target.value})
  }

  render() {
    return (
      <div className='tournamentCreator'>
        <h1>
        <span><i className="fa-solid fa-volleyball"></i>  Create your tournament  <i className="fa-solid fa-volleyball"></i></span>
        </h1>
          <h2>
            <span>Enter name of the tournament:   <input type="text" onChange={this.setName}/></span>
          </h2>
          <h2>
          <span className="counters">Tournament rank: {[...Array(this.state.rank)].map((e, i) => <span key={i}><i className="fa-solid fa-star"></i></span>)}
            <Counter onIncrement={this.handleIncrementRank} onDecrement={this.handleDecrementRank}/>
          </span>
          </h2>
          <h2>
          <span className="counters">Number of availible courts: {this.state.courts}
            <Counter onIncrement={this.handleIncrementCourt} onDecrement={this.handleDecrementCourt}/>
          </span>
          </h2>
          <h2>
          <span className="counters">Number of teams: {this.state.teamNumber}
            <Counter onIncrement={this.handleIncrementTeams} onDecrement={this.handleDecrementTeams}/>
          </span>
          </h2>
          <h2>
          <span className="counters">Team names: {[...Array(this.state.teamNumber)].map((e, i) => <span key={i}><input type="text" onChange={this.getTeamName}/></span>)}
          </span>
          </h2>
      </div>
    )
  }
}

export default TournamentCreator


// nazwa
// ilosc druzyn
// ilosc boisk
// druzyny wypisac
// ranga turnieju (w gwiazdkach podana)