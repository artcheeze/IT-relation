import 'firebase/firestore'

import firebase from 'firebase/app'
import _ from 'lodash'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PRJ_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = firebase.initializeApp(firebaseConfig)
const DB = app.firestore()

// var a = [{ field: 1, start_time: '9.30', state: 'waiting', team1: { name: 'IT22', score: 0 }, team2: { name: 'IT25+26', score: 0 }, winner: '?' }]

// const b = [
//   { time: '10.00', team1: 'IT22', team2: 'IT16+17', field: 1 },
//   { time: '10.30', team1: 'IT22', team2: 'IT21', field: 1 },
//   { time: '11.00', team1: 'IT16+17', team2: 'IT15', field: 1 },
//   { time: '11.30', team1: 'IT22', team2: 'IT11+12', field: 1 },
//   { time: '12.00', team1: 'IT16+17', team2: 'IT25+26', field: 1 },
//   { time: '13.30', team1: 'IT25+26', team2: 'IT21', field: 1 },
//   { time: '14.00', team1: 'IT16+17', team2: 'IT21', field: 1 },
//   { time: '14.30', team1: 'IT16+17', team2: 'IT24', field: 1 },
//   { time: '15.00', team1: 'IT11+12', team2: 'IT21', field: 1 },
//   { time: '15.30', team1: 'IT11+12', team2: 'IT16+17', field: 1 },
//   { time: '16.00', team1: 'IT22', team2: 'IT25+26', field: 1 },
//   { time: '10.00', team1: 'IT24', team2: 'IT15', field: 2 },
//   { time: '10.30', team1: 'IT11+12', team2: 'IT25+26', field: 2 },
//   { time: '11.00', team1: 'IT24', team2: 'IT25+26', field: 2 },
//   { time: '11.30', team1: 'IT24', team2: 'IT21', field: 2 },
//   { time: '12.00', team1: 'IT15', team2: 'IT11+12', field: 2 },
//   { time: '13.30', team1: 'IT24', team2: 'IT11+12', field: 2 },
//   { time: '14.00', team1: 'IT25+26', team2: 'IT15', field: 2 },
//   { time: '14.30', team1: 'IT22', team2: 'IT15', field: 2 },
//   { time: '15.00', team1: 'IT22', team2: 'IT24', field: 2 },
//   { time: '15.30', team1: 'IT15', team2: 'IT21', field: 2 },
//   { time: '15.30', team1: 'IT15', team2: 'IT21', field: 2 },

//   { time: '17.00', team1: '?', team2: '?', field: 1 },
//   { time: '17.00', team1: '?', team2: '?', field: 2 },
// ]

// var c = _.map(b, (item) => {
//   return {
//     field: item.field,
//     start_time: item.time,
//     state: 'waiting',
//     team1: { name: item.team1, score: 0 },
//     team2: { name: item.team2, score: 0 },
//     winner: null,
//   }
// })
// console.log(c)
// DB.collection('sit-rela').doc('schedule').set({ match: c })

export default DB
