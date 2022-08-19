import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { doc, getDoc, where, collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import '../components/sidebar/Sidebar.css';
import "./Tournament.css"


export default function Tournament() {
  const [name, setName] = useState();
  const [clicked, setClicked] = useState(true);
  const [teams, setTeams] = useState([]);
  const [counter, setCounter] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [liveMatch, setLiveMatch] = useState({
    currentMatch: 'None',
    teamA: 'None',
    teamB: 'None',
    scoreA: 0,
    scoreB: 0,
  });

  async function componentDidMount() {
    if (counter === 0) {
      setCounter(1);
      setTeams([]);
      const docOptionsRef = doc(db, "options", "selectedTournament");
      const docOptionsSnap = await getDoc(docOptionsRef);

      setName(docOptionsSnap.data().name)

      const q = query(collection(db, "Tournaments"), where("name", "==", docOptionsSnap.data().name));
      const queryTournamentSnapshot = await getDocs(q);

      queryTournamentSnapshot.forEach((doc) => {
        const tempList = [];
        doc.data().teams.map((value, index) => {
          tempList.push({ value })
        })
        const tempTeams = [];
        for (var i = 0; i < 8; i++) {
          tempTeams.push(tempList[i].value.name)
        }
        setTeams(tempTeams)
      });
    }
  }

  async function getDataUpdates() {
    const unsub = onSnapshot(doc(db, "liveTrounament", "options"), (doc) => {
      const tempArr = [];

      const liveOptions = {
        currentMatch: doc.data().currentMatch,
        teamA: doc.data().teamA,
        teamB: doc.data().teamB,
        scoreA: doc.data().scoreA,
        scoreB: doc.data().scoreB
      }
      tempArr.push(liveOptions)
      setLiveMatch(tempArr)
    });
    let id1 = 0;
    let id2 = 0;
    switch (liveMatch[0].currentMatch) {
      case 'match1':
        id1 = 0;
        id2 = 1;
        break;
      case 'match2':
        id1 = 2;
        id2 = 3;
        break;
      case 'match3':
        id1 = 4;
        id2 = 5;
        break;
      case 'match4':
        id1 = 6;
        id2 = 7;
        break;
    }
    if (scores[id1] !== liveMatch[0]) scores[id1] = liveMatch[0].scoreA
    if (scores[id2] !== liveMatch[0]) scores[id2] = liveMatch[0].scoreB
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
                Winner semifinal 1
              </div>
              <div className='team'>
                Winner semifinal 2
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

      </div>
    </div >
  )
}

