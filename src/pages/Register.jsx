import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import { useAuthContext } from '../context/AuthContext';
import styles from"./Register.Style.module.css"
import {Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import {auth, signInWithGoogle} from "../auth/firebase";

const Register = () => {
  const {registerEmail,setRegisterEmail,setUser,registerPassword,setRegisterPassword
    ,createUserWithEmailAndPassword,onAuthStateChanged} = useAuthContext();
    
    const register = async ()=>{
      try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,
          registerPassword);
        console.log(user);
      }catch(error){
        console.log(error.message)
      }
    }
    onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
  return (
    <>
    <Link to="/" style={{textDecoration:"none",color:"white"}}><h2>React Movie APP</h2></Link>
    
    <div className={styles.container} >
       <form onChange={register}>
       <LockTwoToneIcon sx={{display:"flex",
           margin:"auto"}} color="white" fontSize="large"  />
          <h2>Register</h2>
          <hr />
       <div className="mb-3">

       <div className="form-outline">
                                                         {/* for="form12" */}
        <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
        <input type="text" id="form12" className="form-control" 
         aria-describedby="emailHelp"
             name="email"
             onChange={(e) => setRegisterEmail( e.target.value )}
             />
        </div>

       </div>
       <div className="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control"
          id="exampleInputPassword1"
          name="password"
          onChange={(e) => setRegisterPassword( e.target.value )}
          />
       </div>
       {registerEmail ?<button onClick={register} type="submit" className="btn btn-primary">Register</button> :
        <button type="button" className="btn btn-lg btn-primary" disabled>Register</button> }
     </form>
         <button type="submit" className="btn btn-lg btn-primary " style={{marginLeft:"10rem"}} onClick={signInWithGoogle}><GoogleIcon color="primary"/>  Google <small>ile kaydol</small></button>
     </div>
          </>
  )
   
}

export default Register