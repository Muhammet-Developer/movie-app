import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAuthContext } from '../context/AuthContext';
import axios from "axios"
import Styles from "./Main.Style.module.css"
import MovieCard from '../components/MovieCard';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  // const navigate = useNavigate();
  const {search,setSearch,setData,user}=useAuthContext();
  const [loading,setLoading] = useState(false);
  const api =  ()=>{ 
    setLoading(true)
    const APP_KEY = process.env.REACT_APP_APP_KEY;                          
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${search}`;
    try {
       axios(url).then((data1)=>setData(data1.data.results))
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  const api2 =  ()=>{ 
    const APP_KEY = process.env.REACT_APP_APP_KEY;                          
    const url2 = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`
    try {
       axios(url2).then((data1)=>setData(data1.data.results))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    api2()
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(search && user){
      api();
    }else if(!user){
      alert("Please Login")
    }
    else{
      alert("please enter a text")
    }
    setSearch("")
  }
  
  return (
    <>
    <form onSubmit={handleSubmit} >
    <Container maxWidth="md">
    <div className={Styles.txt_field}>
    <input type="search" value={search} 
    onChange={(e)=> setSearch(e.target.value)}  />
    <span></span>
    <label htmlFor="">Username</label>
    </div>
      <Box  sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}>
       <Button variant="contained"
        color="success" size='medium'>Search</Button>
        </Box>
      </Container>
    </form>
    {loading ? <CircularProgress/>: <MovieCard/>}
   
        </>
  )
}

export default Main