import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Styles from "./Style.module.css"
import img from "../assets/movie.png";
import "./movieCard.css"
const MovieCard = () => {
    const navigate = useNavigate();
    const {data}=useAuthContext();
    const getVoteClass = (vote) => {
      if (vote >= 8) {
        return "green";
      } else if (vote >= 6) {
        return "orange";
      } else {
        return "red";
      }
    };
  return (
    <div>
{/* {      !user && alert("please log in") } */}
        <Grid className={Styles.grdi} container spacing={2} justifyContent="center"
       alignItems="center"  sx={{margin:"auto"}} >
      {data.map((person,index)=>{
        const{id,original_title,poster_path,vote_average}=person;
        const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
        return (
          <Grid item xs={12} sm={6} md={4} key={index}    >
            <Card sx={{ maxWidth: 345, }} className={Styles.card} onClick={()=> navigate(`${id}` ,{ state: person })}>
           
            <CardActionArea >
              <CardMedia
                component="img"
               height="440"
                image={poster_path ? imgUrl : img}
                alt="img" 
                />
              <CardContent >
                <Typography 
                gutterBottom variant="h5" component="div">
                  {original_title}
                </Typography>
                <h6> <span className={`tag ${getVoteClass(vote_average)}`}>{vote_average}</span></h6>
              </CardContent>
            </CardActionArea>
            </Card>
          </Grid>
        );
        })}
        </Grid>
    </div>
  )
}

export default MovieCard