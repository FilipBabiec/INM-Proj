import React, { useState } from 'react'
import Counter from '../components/functional/Counter'
import { db } from '../firebase';
import { doc, getDoc, where, collection, query, getDocs, updateDoc } from "firebase/firestore";
import "../components/TournamentCreator/TournamentCreator.css"

export default function TournamentConsole() {

  const [name, setName] = useState();
  const [tournamentID, setTournamentID] = useState();
  const [counter, setCounter] = useState(0)
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState([]);

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
        // const tempList = [];
        // doc.data().teams.map((value, index) => {
        //   tempList.push({ value })
        // })
        // const tempTeams = [];
        // for (var i = 0; i < 14; i++) {
        //   tempTeams.push(tempList[i].value.name)
        // }
        setTournamentID(doc.id)
        setScores(doc.data().scores)
        // setTeams(tempTeams)
        setTeams(doc.data().teams)
      });

      handleUpdate(0, 0)
      handleUpdate(2, 0)
      handleUpdate(4, 0)
      handleUpdate(6, 0)
      updateDB()
    }
  }

  function handleDecrement(id) {
    if (scores[id] > 0) scores[id]--;
    handleUpdate(id, 0)
    updateDB()
  };
  function handleIncrement(id) {
    scores[id]++;
    handleUpdate(id, 0)
    updateDB()
  };

  function handleUpdate(id, counterFB) {
    if (counterFB === 0) {
      counterFB = 1;
      let idS
      let tempNumber = 0;
      if (id % 2 === 0) {
        tempNumber = 1;
      }
      else {
        tempNumber = -1;
      }

      if ((scores[id] >= 21 && scores[id] > scores[id + tempNumber] + 1) || teams[id + tempNumber] === "Empty") {
        console.log("team ", id, " wins")
        switch (id) {
          case 0:
          case 1:
            idS = 8
            break;

          case 2:
          case 3:
            idS = 9
            break;

          case 4:
          case 5:
            idS = 10
            break;

          case 6:
          case 7:
            idS = 11
            break;

          case 8:
          case 9:
            idS = 12
            break;

          case 10:
          case 11:
            idS = 13
            break;

          case 12:
          case 13:
            idS = 14
            break;

          default:
            idS = 0;
            break;
        }
        teams[idS].name = teams[id].name;
      }
    }
  }


  async function updateDB() {
    const dbRef = doc(db, "Tournaments", tournamentID);
    await updateDoc(dbRef, {
      teams: teams,
      scores: scores
    })
  }

  componentDidMount()
  return (
    <div>
      <h1 className='tournamentCreatorTitle'>{name}</h1>
      <hr className="line" />
      <h2 className='matchTitle'>Match 1</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(0)} onDecrement={(event) => handleDecrement(0)} />
        </div>
        <div className='number'>{scores[0]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(1)} onDecrement={(event) => handleDecrement(1)} />
        </div>
        <div className='number'>{scores[1]}</div>
      </div>
      <hr className="line" />


      <h2 className='matchTitle'>Match 2</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(2)} onDecrement={(event) => handleDecrement(2)} />
        </div>
        <div className='number'>{scores[2]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(3)} onDecrement={(event) => handleDecrement(3)} />
        </div>
        <div className='number'>{scores[3]}</div>
      </div>
      <hr className="line" />
      

      <h2 className='matchTitle'>Match 3</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(4)} onDecrement={(event) => handleDecrement(4)} />
        </div>
        <div className='number'>{scores[4]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(5)} onDecrement={(event) => handleDecrement(5)} />
        </div>
        <div className='number'>{scores[5]}</div>
      </div>
      <hr className="line" />


      <h2 className='matchTitle'>Match 4</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(6)} onDecrement={(event) => handleDecrement(6)} />
        </div>
        <div className='number'>{scores[6]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(7)} onDecrement={(event) => handleDecrement(7)} />
        </div>
        <div className='number'>{scores[7]}</div>
      </div>
      <hr className="line" />


      <h2 className='matchTitle'>Semifinal 1</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(8)} onDecrement={(event) => handleDecrement(8)} />
        </div>
        <div className='number'>{scores[8]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(9)} onDecrement={(event) => handleDecrement(9)} />
        </div>
        <div className='number'>{scores[9]}</div>
      </div>
      <hr className="line" />


      <h2 className='matchTitle'>Semifinal 2</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(10)} onDecrement={(event) => handleDecrement(10)} />
        </div>
        <div className='number'>{scores[10]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(11)} onDecrement={(event) => handleDecrement(11)} />
        </div>
        <div className='number'>{scores[11]}</div>
      </div>
      <hr className="line" />


      <h2 className='matchTitle'>Final</h2>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team A: </h2>
          <Counter onIncrement={(event) => handleIncrement(12)} onDecrement={(event) => handleDecrement(12)} />
        </div>
        <div className='number'>{scores[12]}</div>
      </div>
      <div className='column'>
        <div className='row'>
          <h2 className="counters">Score team B: </h2>
          <Counter onIncrement={(event) => handleIncrement(13)} onDecrement={(event) => handleDecrement(13)} />
        </div>
        <div className='number'>{scores[13]}</div>
      </div>
      <hr className="line" />
    </div>
  )
}
