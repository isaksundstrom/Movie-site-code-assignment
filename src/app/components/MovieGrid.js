"use client";

import Image from "next/image";
import { useState } from "react";

const MovieGrid = ({ movies }) => {
  const [hover, setHover] = useState({});

  const handleHoverOn = (i) => {
    hover[i] = true;
    setHover({ ...hover });
  };
  const handleHoverOff = (i) => {
    hover[i] = false;
    setHover({ ...hover });
  };

  return (
    <div className="movies">
      {movies && movies.map((movie, i) => {
        return (
          <div
            key={i}
            className="movies-item"
            onMouseEnter={() => handleHoverOn(i)}
            onMouseLeave={() => handleHoverOff(i)}
          >
            {hover[i] && (
              <div className="movie-hover">
                <h1 style={{textAlign:"center"}}>{movie.title}</h1>
                <h3>{movie.release_date.split("-")[0]}</h3>
              </div>
            )}
            <Image
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={255}
              height={382}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieGrid;
