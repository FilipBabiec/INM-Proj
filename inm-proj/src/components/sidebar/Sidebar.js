import React, { Component } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import './Sidebar.css';


class Sidebar extends Component {

  state = { SidebarData: [] }
  async componentDidMount() {
    const querySnapshot = await getDocs(collection(db, "Tournaments"));
    querySnapshot.forEach((doc) => {
      this.state.SidebarData.push(doc.data().name)
    });
  }

  render() {
    return (
      <>
        {/* {console.log('SidebarData: => ', SidebarData)} */}
        <div className={this.props.hideShow ? 'side-menu' : 'side-menu active'}>
          <ul className='side-menu-items' style={{ listStyle: 'none' }}>
            {this.state.SidebarData.map((item, index) => {
              return (
                <li key={index} className={'side-text'}>
                  <a href={'Tournament'}>
                    <i className="fa-solid fa-volleyball">  </i>
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </>


    )
  }
}


export default Sidebar