import styles from"./LoginStyle.module.css"
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { useAuthContext } from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import {auth, signInWithGoogle} from "../auth/firebase";
import GoogleIcon from '@mui/icons-material/Google';
import {Link } from 'react-router-dom';
const Login = () => {
  const {loginEmail,
    setUser,
    setLoginEmail,loginPassword,setLoginPassword,
    signInWithEmailAndPassword,} = useAuthContext();

    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    });

  const handleSubmit = (e)=>{
     e.preventDefault();
  };

  const login = async ()=>{
    try{
      const user = await signInWithEmailAndPassword(
        auth,loginEmail,loginPassword);

    }catch(error){
      console.log(error.message)
    }
  }

  return (
 <div className={styles.container}>
  <div className={styles.form1}>
    <form onSubmit={handleSubmit}>
    <LockTwoToneIcon sx={{display:"flex",
        margin:"auto"}} color="error" fontSize="large"  />
       <h2>LOGİN</h2>
       <hr />
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="text" className="form-control" id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      name="email"
      onChange={(e) => setLoginEmail( e.target.value )}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"
       id="exampleInputPassword1"
       name="password"
      onChange={(e) => setLoginPassword( e.target.value )}
      />
    </div>
    <Link to="/register" style={{textDecoration:"none",width:"25px"}} >Register</Link>
    <div className="d-grid ">
  <button type="submit" className="btn btn-outline-secondary" onClick={login}>Login</button><br />
  <button type="submit" className="btn btn-outline-secondary" onClick={signInWithGoogle}><GoogleIcon color="primary"/>  Google <small>ile kaydol</small></button>
    </div>
    

  </form>
      </div>
      
  </div>


  ); 
}

export default Login
 
