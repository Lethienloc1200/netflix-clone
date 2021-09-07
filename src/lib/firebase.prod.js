import Firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';


// 1) when seeding the databas you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {

    apiKey: "AIzaSyAirfZEsUN85QaaaML_kByALtsr_fwxjaQ",
    authDomain: "nextflix-clone-ffe5e.firebaseapp.com",
    databaseURL: 'https://nextflix-clone-ffe5e.firebaseio.com',
    projectId: "nextflix-clone-ffe5e",
    storageBucket: "nextflix-clone-ffe5e.appspot.com",
    messagingSenderId: "709388921294",
    appId: "1:709388921294:web:97231f94dbf74f744e639f",
    measurementId: "G-PKF04NPGWF"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };