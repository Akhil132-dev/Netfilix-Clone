import React from 'reac
import
  function ss() {
    return (
      <div>
        <div className="row">
          <h1>{title}</h1>
          <div className="row_posters">

            {movies.map((movie) => (

              <img
                key={movie.id}

                className={`row__poster ${isLargeRow && "row_psoterlage"}`}
                onClick={() => handleClike(movie)}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
      </div>
    )
  }

export default ss
