import React from 'react';


export const SidebarData = [
  {
    title: 'Tournament 1',
    path: '/',
    icon: <i className="fa-solid fa-volleyball"></i>,
    cName: 'side-text'
  },
  {
    title: 'Tournament 2',
    path: '/',
    icon: <i className="fa-solid fa-volleyball"></i>,
    cName: 'side-text a'
  },
  {
    title: 'Tournament 3',
    path: '/',
    icon: <i className="fa-solid fa-volleyball"></i>,
    cName: 'side-text'
  },
  {
    title: 'Tournament 4',
    path: '/',
    icon: <i className="fa-solid fa-volleyball"></i>,
    cName: 'side-text'
  }
]

// import React, {useState} from 'react'
// import firebase from '../../firebase';

// export default function SidebarData() {
//   const [tournaments, getTournaments] = useState([]);

//   // const ref = firebasecollection(firebase, "Tournaments")

//   // const SidebarData = ref.data();
//   return (
//     <div>
//       <h2>Tournaments: </h2>
//       {tournaments.map((tournament) => (
//         <div key={tournament.id}>
//           <h3>{tournament.title}</h3>
//         </div>
//       ))}
//     </div>
//   )
// }