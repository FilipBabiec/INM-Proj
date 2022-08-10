import React, { Component } from 'react'
import "./Counter.css"

class CounterRank extends Component {

  render() {
    return (
      <div className="counterDiv">
        <button onClick={this.props.onDecrement} className="button_plus">
          -
        </button>
        <button onClick={this.props.onIncrement} className="button_plus">
          +
        </button>
      </div>
    )
  }
}

//  displaying element n number of times
//  {[...Array(this.state.count)].map((e, i) => <span key={i}><i className="fa-solid fa-star"></i></span>)}



export default CounterRank