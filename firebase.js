
import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from "firebase/firestore"
import { getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCdwlLhFFzKGkPqeIlkt1XtXEzTG4Hkxzo",
    authDomain: "berteman-sm.firebaseapp.com",
    projectId: "berteman-sm",
    storageBucket: "berteman-sm.appspot.com",
    messagingSenderId: "798651138634",
    appId: "1:798651138634:web:d507c48f3224418e0b9cb3"
  };

  const app = initializeApp(firebaseConfig);


  const db = getFirestore(app);


const storage = getStorage(app);

export {db,storage};