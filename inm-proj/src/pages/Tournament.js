import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { doc, getDoc, where, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import '../components/sidebar/Sidebar.css';
import "./Tournament.css"


export default function Tournament() {
  const [name, setName] = useState();
  const [tournamentID, setTournamentID] = useState();
  const [clicked, setClicked] = useState(true);
  const [teams, setTeams] = useState([]);
  const [counter, setCounter] = useState(0);
  const [scores, setScores] = useState([]);


  async function componentDidMount() {
    if (counter === 0) {
      setCounter(1);
      setTeams([]);
      const docOptionsRef = doc(db, "options", "selectedTournament");
      const docOptionsSnap = await getDoc(docOptionsRef);

      setName(docOptionsSnap.data().name)
      // setTournamentID(docOptionsSnap.id)


      //Initial read from the DB
      const q = query(collection(db, "Tournaments"), where("name", "==", docOptionsSnap.data().name));
      const queryTournamentSnapshot = await getDocs(q);

      queryTournamentSnapshot.forEach((doc) => {
        const tempList = [];
        doc.data().teams.map((value, index) => {
          tempList.push({ value })
        })
        const tempTeams = [];
        for (var i = 0; i < 15; i++) {
          tempTeams.push(tempList[i].value.name)
        }
        setTournamentID(doc.id)
        setScores(doc.data().scores)
        setTeams(tempTeams)
      });
    }
  }

  //Checking for real time updates from the DB
  async function getDataUpdates() {
    const unsub = onSnapshot(doc(db, "Tournaments", tournamentID), (doc) => {
      let tempArr = []
      for (var step = 0; step < 15; step++) {
        tempArr.push(doc.data().teams[step].name)
      }
      setTeams(tempArr)
      setScores(doc.data().scores)
      // console.log(teams)
      // console.log(scores)
      // console.log(tournamentID)
    });
  }

  componentDidMount()
  getDataUpdates()
  return (
    <div className='tournamentWrapper'>
      <button className={clicked ? 'hideShowButton active' : 'hideShowButton'} onClick={() => setClicked(!clicked)}>{clicked ? <i className='fa-solid fa-angle-left'></i> : <i className='fa-solid fa-angle-right'></i>}</button>
      <Sidebar hideShow={clicked ? false : true} />
      <h1 className='titleT'>{name}</h1>

      <div className='ladder'>


        <div className='round'>
          <div className='match'>
            Match 1
            <div className='teams'>
              <div className='team'>
                {teams[0]}
              </div>
              <div className='team'>
                {teams[1]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 2
            <div className='teams'>
              <div className='team'>
                {teams[2]}
              </div>
              <div className='team'>
                {teams[3]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 3
            <div className='teams'>
              <div className='team'>
                {teams[4]}
              </div>
              <div className='team'>
                {teams[5]}
              </div>
            </div>
          </div>

          <div className='match'>
            Match 4
            <div className='teams'>
              <div className='team'>
                {teams[6]}
              </div>
              <div className='team'>
                {teams[7]}
              </div>
            </div>
          </div>
        </div>


        <div className='roundScore'>
          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[0]}
              </div>
              <div className='score'>
                {scores[1]}
              </div>
            </div>
          </div>

          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[2]}
              </div>
              <div className='score'>
                {scores[3]}
              </div>
            </div>
          </div>

          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[4]}
              </div>
              <div className='score'>
                {scores[5]}
              </div>
            </div>
          </div>

          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[6]}
              </div>
              <div className='score'>
                {scores[7]}
              </div>
            </div>
          </div>
        </div>


        <div className='round'>


          <div className='match'>
            Semifinal 1
            <div className='teams'>
              <div className='team'>
                {teams[8]}
              </div>
              <div className='team'>
                {teams[9]}
              </div>
            </div>
          </div>

          <div className='match'>
            Semifinal 2
            <div className='teams'>
              <div className='team'>
                {teams[10]}
              </div>
              <div className='team'>
                {teams[11]}
              </div>
            </div>
          </div>
        </div>


        <div className='roundScore'>
          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[8]}
              </div>
              <div className='score'>
                {scores[9]}
              </div>
            </div>
          </div>

          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[10]}
              </div>
              <div className='score'>
                {scores[11]}
              </div>
            </div>
          </div>
        </div>


        <div className='round'>


          <div className='match'>
            Final
            <div className='teams'>
              <div className='team'>
                {teams[12]}
              </div>
              <div className='team'>
                {teams[13]}
              </div>
            </div>
          </div>
        </div>


        <div className='roundScore'>
          <div className='matchScore'>
            Score:
            <div className='scores'>
              <div className='score'>
                {scores[12]}
              </div>
              <div className='score'>
                {scores[13]}
              </div>
            </div>
          </div>
        </div>


        <div className='round'>


          <div className='match'>
              <div className='teamWinner'>
                {teams[14]}<i className="fa-solid fa-crown"></i>
              </div>
          </div>
        </div>

      </div>
    </div >
  )
}

