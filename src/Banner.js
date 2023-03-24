import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    const savedMoviesStr = localStorage.getItem("savedMovies");
    if (savedMoviesStr) {
      setSavedMovies(JSON.parse(savedMoviesStr));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setTrailerUrl("");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [videoRef]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handlePlayClick = async () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(
          movie?.title || movie?.name || movie?.original_name || ""
        );
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAddToListClick = () => {
    setIsAddedToList(!isAddedToList);
    const movieToAdd = {
      id: movie.id,
      title: movie.title || movie.name || movie.original_name,
      overview: movie.overview,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
    };
    if (!isAddedToList) {
      setSavedMovies([...savedMovies, movieToAdd]);
    } else {
      setSavedMovies(savedMovies.filter((item) => item.id !== movie.id));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={handlePlayClick}>
            Play
          </button>
          <button
            className={`banner__button ${
              isAddedToList ? "banner__button--active" : ""
            }`}
            onClick={handleAddToListClick}
          >
            {isAddedToList ? "Added to List" : "Add to List"}
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
        <div className="video__container" ref={videoRef}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
export default Banner;
