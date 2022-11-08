import {useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Movie.css"
import { useEffect, useState } from "react";
import defaultİmg from "../assets/movie.png"
const MovieDetail = () => {
  const navigate=useNavigate()
 
  const {id} = useParams()
  const [data2,setData2]=useState("");
  const APP_KEY = process.env.REACT_APP_APP_KEY;                          
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`;
  
  
  useEffect(()=>{
    axios.get(url).then(res => setData2(res.data))
  })
  
  const {title,overview,poster_path,vote_average,popularity,original_language,release_date} =data2;
  const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;

  return (
    <div>
          <div className="wrapper">
        <header className="header">
          <div className="header_logo">Movie</div>
          <div className="header_actions">
          </div>
        </header>
        <main id="main">
          <section>
            <article className="movie">
              <div className="movie_img">
              <img src={poster_path ? imgUrl: defaultİmg} alt={title} />
              </div>
              <div className="movie_info">
                <header><h1 className="movie_title">{title}</h1></header>
                <div className="movie_desc" />
                <div className="movie_details">
                  <p>{overview}</p>
                  <h3>Details</h3>
                  <ul className="flex">
                    <li>Realse date <span id="movie_date" />{release_date}</li>
                    <li>Rate: <span id="movie_rating" />{vote_average}</li>
                    <li>Popularity: <span id="movie_runtime" />{popularity}</li>
                    <li>Language: <span id="movie_runtime" />{original_language}</li>
                  </ul>
                </div>
                  <button className="btn" target="_blank" ><PlayArrowIcon className="icon"/> Watch Movie</button>
                  <button className="btn" onClick={()=> navigate(-1) }>Go Back</button>
              </div>
            </article>
            <div className="episodes_list">
              <h3 className="episodes_title" > </h3>
              <ol className="episodes" id="episodes" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default MovieDetail
