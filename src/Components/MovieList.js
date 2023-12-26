import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [year, setYear] = useState(12);
  const [allYears,setAllyears]= useState([12]);
  let selectedList = [];

  // let movieObj={year:null,lis:[]}

  useEffect(() => {
    getList();
  }, [year]);
  // console.log(movieList, "state");

  useEffect(() => {
    document.documentElement.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight+2);
    window.addEventListener("scroll", handleScroll);
  }, [year]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log("awayyyyy");
      setYear(year + 1);
      // console.log(allYears,"yyyyy");
    } else if (document.documentElement.scrollTop === 0) {
      if(year>10){
        setYear(year - 1);
      console.log("0000000");
      }else{
        setYear(12);
      }
      
    }
    setAllyears((prev)=>[...prev,year])
  };

  const getList = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=20${year}&page=1&vote_count.gte=100`
    )
      .then((response) => response.json())
      .then((res) => {
        if(year>=12){
          setMovieList((prev) => [...prev, res.results]);
        }else if(year<12 && year>10){
          setMovieList((prev) => [res.results,...prev]);
        }
        
      }); 
      genreFilter("all")
  };
  const genreFilter=(genre)=>{
    let selectedGenre= genre;
    let filteredMovies=[]
    switch(selectedGenre){
      case "all":
        return selectedList=movieList;
      case "action":
        console.log("actionCalled")
         return movieList.map(movieArray=>{
          return movieArray.filter(movi=>movi.genre_ids&&movi.genre_ids.includes(28))
         })
      case "drama":
         filteredMovies = movieList.filter(movie => movie.genre_ids.includes(18));
         return selectedList = filteredMovies;
      case 'comedy':
        filteredMovies = movieList.filter(movie => movie.genre_ids.includes(35));
         return selectedList = filteredMovies;
      case 'horror':
        filteredMovies = movieList.filter(movie => movie.genre_ids.includes(27));
         return selectedList = filteredMovies;
      case 'sci-fi':
        filteredMovies = movieList.filter(movie => movie.genre_ids.includes(878));
         return selectedList = filteredMovies;
      default:
        return selectedList=movieList;
    }
  }
  return (
    <>
    <div className="navBar">
      <div className="title">CinemaStore</div>
      <div className="genereContainer">
        <button className="genereButton" onClick={()=>genreFilter("all")}>All</button>
        <button className="genereButton" onClick={()=>genreFilter("action")}>Action</button>
        <button className="genereButton" onClick={()=>genreFilter("comedy")}>Comedy</button>
        <button className="genereButton" onClick={()=>genreFilter("drama")}>Drama</button>
        <button className="genereButton" onClick={()=>genreFilter("horror")}>Horror</button>
        <button className="genereButton" onClick={()=>genreFilter("sci-fi")}>Sci-Fi</button>
      </div>
    </div>
    <div className="main">
      <div className="year">20{year}</div>
      <div className="movieList">
        {movieList.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      <div className="year">20{year+1}</div>
    </div>
    </>
    
  );
}

export default MovieList;
