import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { doc, getDoc, where, collection, query, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
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
      // setTournamentID(docOptionsSnap.id)


      const q = query(collection(db, "Tournaments"), where("name", "==", docOptionsSnap.data().name));
      const queryTournamentSnapshot = await getDocs(q);

      queryTournamentSnapshot.forEach((doc) => {
        const tempList = [];
        const tempScores = [];
        doc.data().teams.map((value, index) => {
          tempList.push({ value })
        })
        const tempTeams = [];
        for (var i = 0; i < 14; i++) {
          tempTeams.push(tempList[i].value.name)
        }
        setTournamentID(doc.id)
        setScores(doc.data().scores)
        setTeams(tempTeams)
      });
    }
  }

  async function getDataUpdates() {
    let win = 0;
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

    //Setting current live match
    let id1 = 0;
    let id2 = 0;
    let idN = 0;
    switch (liveMatch[0].currentMatch) {
      case 'match1':
        id1 = 0;
        id2 = 1;
        idN = 8;
        liveMatch[0].teamA = teams[0];
        liveMatch[0].teamB = teams[4];
        break;
      case 'match2':
        id1 = 2;
        id2 = 3;
        idN = 9;
        liveMatch[0].teamA = teams[1];
        liveMatch[0].teamB = teams[5];
        break;
      case 'match3':
        id1 = 4;
        id2 = 5;
        idN = 10;
        liveMatch[0].teamA = teams[2];
        liveMatch[0].teamB = teams[6];
        break;
      case 'match4':
        id1 = 6;
        id2 = 7;
        idN = 11;
        liveMatch[0].teamA = teams[3];
        liveMatch[0].teamB = teams[7];
        break;
      case 'semifinal1':
        id1 = 8;
        id2 = 9;
        idN = 12;
        liveMatch[0].teamA = teams[8];
        liveMatch[0].teamB = teams[9];
        break;
      case 'semifinal2':
        id1 = 10;
        id2 = 11;
        idN = 13;
        liveMatch[0].teamA = teams[10];
        liveMatch[0].teamB = teams[11];
        break;
      case 'final':
        id1 = 12;
        id2 = 13;
        liveMatch[0].teamA = teams[12];
        liveMatch[0].teamB = teams[13];
        break;
      default:
        id1 = 14;
        id2 = 15;
        break;
    }
    if (scores[id1] !== liveMatch[0].scoreA) scores[id1] = liveMatch[0].scoreA
    if (scores[id2] !== liveMatch[0].scoreB) scores[id2] = liveMatch[0].scoreB

    // console.log(tournamentID)


    //Winning conditions
    if ((scores[id1] >= 21 && scores[id1] > scores[id2] + 1) || liveMatch[0].teamB === "Empty") {
      //teamA == Winner
      //resetLiveScoresDB() and resetCurrentMatchDB()
      teams[idN] = liveMatch[0].teamA

      // console.log(tournamentID)
      // console.log(teams)
      // const tournamentRef = doc(db, "Tournaments", tournamentID);
      // await updateDoc(tournamentRef, {
      //   teams: [
      //     { id: 0, name: teams[0] },
      //     { id: 1, name: teams[1] },
      //     { id: 2, name: teams[2] },
      //     { id: 3, name: teams[3] },
      //     { id: 4, name: teams[4] },
      //     { id: 5, name: teams[5] },
      //     { id: 6, name: teams[6] },
      //     { id: 7, name: teams[7] },
      //     { id: 8, name: teams[8] },
      //     { id: 9, name: teams[9] },
      //     { id: 10, name: teams[10] },
      //     { id: 11, name: teams[11] },
      //     { id: 12, name: teams[12] },
      //     { id: 13, name: teams[13] }
      //   ],
      //   scores: scores,
      // })

    }
    else if ((scores[id2] >= 21 && scores[id2] > scores[id1] + 1) || liveMatch[0].teamA === "Empty") {
      //teamB == Winner
      //resetLiveScoresDB() and resetCurrentMatchDB()
      //moveWinnerTeamToAppropriateSpot()
      teams[idN] = liveMatch[0].teamB

    }
    else
    {
      
    }
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

      </div>
    </div >
  )
}

