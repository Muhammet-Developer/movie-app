import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuthContext } from "../context/AuthContext";
import {auth} from "../auth/firebase";

const Navbar = () => {
const {setUser1,user,signOut} = useAuthContext();
const logout = async ()=>{
  await signOut(auth)
}
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar >
          <Typography   variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration:"none",color:"white"}}  >React Movie App</Link>
          </Typography>
          {!user ? "" : <h6>{localStorage.getItem("name")}</h6>}
          {user ? <Button color="inherit">
          <Link to="/login" onClick={logout} style={{textDecoration:"none",color:"white"}}
            >logout</Link>
          </Button> : <Button color="inherit">
          <Link to="/login" onClick={()=> setUser1({email:"",password:""})} style={{textDecoration:"none",color:"white"}}
            >login</Link>
          </Button>} 
          {user ? "":<Button color="inherit">
          <Link to="/register"
           style={{textDecoration:"none",color:"white"}}>Register</Link>
          </Button>}
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
