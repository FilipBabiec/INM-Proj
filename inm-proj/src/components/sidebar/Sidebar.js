import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
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

  async selectTournament(value) {
    const dbRef = doc(db, 'options', 'selectedTournament');
    await updateDoc(dbRef, {
      name: value
    })
    window.location.reload()
  }

  render() {
    return (
      <>
        <div className={this.props.hideShow ? 'side-menu' : 'side-menu active'}>
          <ul className='side-menu-items' style={{ listStyle: 'none' }}>
            {this.state.SidebarData.map((item, index) => {
              return (
                <li key={index} className={'side-text'}>
                  <a  id={item} onClick={() => this.selectTournament(item)}>
                    <i className="fa-solid fa-volleyball"></i>
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