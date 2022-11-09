import { createContext, useContext, useState } from "react"
import {createUserWithEmailAndPassword,onAuthStateChanged,
  signOut,signInWithEmailAndPassword} from "firebase/auth"

const AuthContext = createContext();

export const UserProvider = ({children})=>{
  const [user1,setUser1]= useState({ email:"",
  password:""});
    const [user,setUser]= useState({});
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");
    const [loginEmail,setLoginEmail]=useState("");
    const [loginPassword,setLoginPassword]=useState("");
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const [videoKey, setVideoKey] = useState();
return(
  <AuthContext.Provider value={{user1,setUser1,registerEmail,setRegisterEmail,registerPassword,setRegisterPassword
  ,loginEmail,setLoginEmail,
  loginPassword,
  signInWithEmailAndPassword,
  videoKey, setVideoKey,
  setLoginPassword,user,setUser,
  createUserWithEmailAndPassword,onAuthStateChanged,
  signOut,search,setSearch,data,setData}}>
    {children}
  </AuthContext.Provider>
)
}


export const useAuthContext = () => useContext(AuthContext);