import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpb2EqQoToQZgZJIvLNPvxPFPMpZveINk",
    authDomain: "clone-learn-6151d.firebaseapp.com",
    projectId: "clone-learn-6151d",
    storageBucket: "clone-learn-6151d.appspot.com",
    messagingSenderId: "918425035249",
    appId: "1:918425035249:web:04acaa27c2ea24a9626450",
    measurementId: "G-86PLK76W4S"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db }
