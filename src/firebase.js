import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBL2YG4Ngya1kBQN-lDpEdj40lic2RcwBw",
    authDomain: "ig-reels-clone-de337.firebaseapp.com",
    projectId: "ig-reels-clone-de337",
    storageBucket: "ig-reels-clone-de337.appspot.com",
    messagingSenderId: "167362297342",
    appId: "1:167362297342:web:8a36ac5c2aeacc7d81d4af",
    measurementId: "G-KG1SRE2WPX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
