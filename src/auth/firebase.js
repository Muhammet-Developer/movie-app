import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();


  export const signInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((result)=>{
      const name = result.user.displayName
      const email = result.user.email
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
    }).catch((error)=>console.log(error))
  }
