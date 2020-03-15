// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDhQS_nTVlvEx_3smfSyFX2_J9FBReJQaA",
    authDomain: "monuments-5eabc.firebaseapp.com",
    databaseURL: "https://monuments-5eabc.firebaseio.com",
    projectId: "monuments-5eabc",
    storageBucket: "monuments-5eabc.appspot.com",
    messagingSenderId: "514521706717",
    appId: "1:514521706717:web:71ddf3c548f262824aab34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();



//   database.collection("Data").doc('adil shah palace').set({
//     years : {
//         2016: 233,
//         2017: 245,
//         2018: 154,
//         2019: 303,
//         2020: 20,
//     },

//     months: [23, 52, 52, 12, 67, 95, 36, 90, 26, 71, 34, 78],

//     days : [2, 6, 2, 5, 3, 3, 6, 2, 6, 1,
//             2, 7, 1, 5, 3, 3, 2, 2, 6, 2,
//             2, 6, 7, 5, 3, 6, 6, 2, 6, 1,
//             ]
    
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

  export default database;