import React, { useState, useEffect } from "react";
import axios from "../pages/axios";
import requests from "../pages/requests";

const base_url = "https://image.tmdb.org/t/p/original/";

const Hero = ({ fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log("Randomized movie selected", movie);
  const heroImageUrl = base_url + movie?.backdrop_path;

  console.log(heroImageUrl);

  return (
    <div
      className="hero"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${heroImageUrl}")`,
        backgroundPosition: "center center",
        // color: "whitesmoke",
      }}
    >
      <div
        className="hero__contents"
        // style={{
        //   textAlign: "center",
        //   padding: "30px",
        // }}
      >
        <h1 className="hero__title">
          {movie.title ? movie.title : movie.name || movie.original_name}
        </h1>

        <div className="hero__buttons">
          <button className="hero__button">Play</button>
          <button className="hero__button">My List</button>
        </div>

        <h1 className="hero__description">
          {movie.overview ? movie.overview : ""}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
