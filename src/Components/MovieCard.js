import React from "react";

function MovieCard({movie}) {
  // let image = ;

  // "adult": false,
  // "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
  // "genre_ids": [
  //   80,
  //   18,
  //   36
  // ],
  // "id": 466420,
  // "original_language": "en",
  // "original_title": "Killers of the Flower Moon",
  // "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
  // "popularity": 1323.647,
  // "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
  // "release_date": "2023-10-18",
  // "title": "Killers of the Flower Moon",
  // "video": false,
  // "vote_average": 7.6,
  // "vote_count": 1443,

  return (
    <>
      {/* <p className="year">20{movie.year}</p> */}
      {movie.map((m)=>{
        let image = `https://image.tmdb.org/t/p/w500${m.poster_path}`
        return(
          <div className="cardContainer">
        <img
          src={image}
          alt="baner"
          className="movieCardBaner"
        />
        <div className="details">
          <div className="rating">
            <p>{m.vote_average}</p>
          </div>
          <p className="movieTitle">{m.title}</p>
        </div>
        <div className="overview movieCardBaner">
          <p>
            {m.overview}
          </p>
        </div>
      </div>
        )}
  )
      }
    </>
  );
  
}

export default MovieCard;