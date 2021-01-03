import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from './request';
import "./Row.css";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setmovies] = useState([]);
    const [trailerUrl,setTreailerURl] = useState("");
useEffect(() => {
   async function fetchdata() {
const request  = await axios.get(fetchUrl);
// console.log(request);
// console.log(request.data.results.lenght)
setmovies(request.data.results)

return request;
   }
    fetchdata();
    
}, [fetchUrl]);

const opts ={
    height:"390",
    width:"100%",
    playerVars:{

 autoplay:1,
    },
   
}
const handleClike = (movie)=>{
if(trailerUrl){
    setTreailerURl("");
}
else{
    console.log(movie)
   
    movieTrailer(movie?.name || "").then((url) =>{

const urlParams = new URLSearchParams(new URL(url).search);

setTreailerURl( urlParams.get('v'))
console.log( urlParams.get('v'))
console.log(urlParams)

    }).catch(erro =>console.log(erro))
}
}
console.log(trailerUrl)
// console.table(movies)
    return (
        <div className ="row">
            <h1>{title}</h1>
            <div className ="row_posters">

              {movies.map((movie) =>(
                 
                  <img
                  key={movie.id}
                  
                  className={`row__poster ${isLargeRow && "row_psoterlage"}`}
                  onClick={() => handleClike(movie)}
                   src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
              ))}
            </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}  
             
        </div>
    )
}

export default Row
