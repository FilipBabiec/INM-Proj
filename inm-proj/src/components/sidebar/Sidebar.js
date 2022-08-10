import React, { Component } from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';


class Sidebar extends Component {
  // state = { clicked: false }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked })
  // }

  render() {
    return (
      <>
        <side className={this.props.hideShow ? 'side-menu' : 'side-menu active'}>
          <ul className='side-menu-items' style={{ listStyle: 'none' }}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={'item.cName'}>
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </side>
      </>


    )
  }
}


export default Sidebar