import React, { useState, useEffect } from "react";
import axios from "../pages/axios";
import Youbute from "react-youtube";
import movieTrailer from "movie-trailer";
import Image from "next/image";

const style = {
  rowPoster: `object-contain `,
};
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //React-Youtuble Options Configurations
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // OnClick Event that handles the display of the movie trailer
  function handleClick(m) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer((m?.title ? m.title : m.name) || "")
        .then((url) => {
          //sorting out the videoId from the url gottren from youtube(movieTrailer)
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams, "url", url);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            // layout="fill"
          />
        ))}
      </div>

      {trailerUrl && <Youbute videoId={trailerUrl} opts={opts} />}

      {/*  container -> posters */}
    </div>
  );
};

export default Row;
