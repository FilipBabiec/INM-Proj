import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { doc, getDoc, where, collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import '../components/sidebar/Sidebar.css';
import "./Tournament.css"


export default function Tournament() {
  const [clicked, setClicked] = useState(true);
  const [teams, setTeams] = useState([]);

  async function componentDidMount() {
    const docOptionsRef = doc(db, "options", "selectedTournament");
    const docOptionsSnap = await getDoc(docOptionsRef);

    const q = query(collection(db, "Tournaments"), where("name", "==", docOptionsSnap.data().name));
    const queryTournamentSnapshot = await getDocs(q);

    queryTournamentSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setTeams(doc.data().teams)
      console.log(doc.data().teams)
    });
  }

  componentDidMount()
  return (
    <div className='tournamentWrapper'>
      <button className={clicked ? 'hideShowButton active' : 'hideShowButton'} onClick={() => setClicked(!clicked)}>{clicked ? <i className='fa-solid fa-angle-left'></i> : <i className='fa-solid fa-angle-right'></i>}</button>
      <Sidebar hideShow={clicked ? false : true} />
      <h1 className='titleT'>{teams}</h1>

      <div className='ladder'>


        <div className='round'>


          <div className='match'>
            Match 1
            <div className='teams'>
              <div className='team'>
                {teams[0]}
              </div>
              <div className='team'>
                {teams[4]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 2
            <div className='teams'>
              <div className='team'>
                {teams[1]}
              </div>
              <div className='team'>
                {teams[5]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 3
            <div className='teams'>
              <div className='team'>
                {teams[2]}
              </div>
              <div className='team'>
                {teams[6]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 4
            <div className='teams'>
              <div className='team'>
                {teams[3]}
              </div>
              <div className='team'>
                {teams[7]}
              </div>
            </div>
          </div>
        </div>


        <div className='round'>


          <div className='match'>
            Semifinal 1
            <div className='teams'>
              <div className='team'>
                Winner match 1
              </div>
              <div className='team'>
                Winner match 2
              </div>
            </div>
          </div>

          <div className='match'>
            Semifinal 2
            <div className='teams'>
              <div className='team'>
                Winner match 3
              </div>
              <div className='team'>
                Winner match 4
              </div>
            </div>
          </div>
        </div>


        <div className='round'>


          <div className='match'>
            Final
            <div className='teams'>
              <div className='team'>
                Winner semifinal 1
              </div>
              <div className='team'>
                Winner semifinal 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
