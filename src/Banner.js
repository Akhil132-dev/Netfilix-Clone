import React, { useEffect, useState } from "react";
import requests from "./request";
import axios from "./axios";
import './Banner.css'
function Banner() {
  const [movie, setmovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovies(request.data.results[Math.floor(Math.random() * 10)]);
      return request;
    }
    fetchdata();
  }, []);
  function truncateString(str, num) {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__conotents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
<h1 className="baneer_descripatui">{ truncateString(movie?.overview,159)}</h1> 

      </div>
    <div className="banner_fadeBottom"/>  
    </header>
    
  );
}

export default Banner;
