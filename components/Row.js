import React, { useState, useEffect } from "react";
import axios from "../pages/axios";

const style = {
  rowPointer: `object-fit: contain; width`,
};
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {/*  container -> posters */}
    </div>
  );
};

export default Row;
