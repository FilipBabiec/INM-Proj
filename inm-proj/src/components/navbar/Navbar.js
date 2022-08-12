import React, { useState, Component } from 'react';
import { Button } from '../functional/Button';
import { MenuItems } from "./MenuItems"
import firebase from '../../firebase';
import './Navbar.css'
import Sidebar from '../sidebar/Sidebar';
import '../sidebar/Sidebar.css';

class Navbar extends Component {
  state = { clicked: false }
  

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return(
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">VTMS  <i className="fa-solid fa-volleyball"></i></h1>
          <ul className='nav-menu'>
            {MenuItems.map((item, index)=> {
              return (
                <li key={index}> 
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <Button onClick={this.handleClick}>{this.state.clicked ? 'Hide tournaments' : 'Show tournaments'}</Button>
          <Sidebar hideShow={this.state.clicked ? false : true} />
        </nav>
      </>
      
    )
  }
}


export default Navbar