"use client";

import { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";

const DiscoverComponent = ({ genres }) => {
  const [genre, setGenre] = useState(genres[0]);
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      setLoading(true);
      const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RhMDliYzdkNjQ5ZmIxNWIxOWVhMzA5Mjg5ZjljOSIsIm5iZiI6MTcyODk0MDM1OC42MTE1ODMsInN1YiI6IjY3MGQ1ZWM0ZjU4YTkyMDZhYTQxODc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-PEvPtu_0HaWlg1B5QA3xYIDLghDijrywJrkMnGZLvA",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    };

    if (genre) fetchMoviesByGenre();
  }, [genre]);

  return (
    <div>
      <div className="genre-buttons">
        {genres &&
          genres.map((g, i) => {
            return (
              <div
                className={`${
                  genre.id == g.id ? "genre-button" : "genre-button-off"
                }`}
                key={i}
                onClick={() => setGenre({ ...g })}
              >
                {g.name}
              </div>
            );
          })}
      </div>
      {!loading && <MovieGrid movies={movies} />}
    </div>
  );
};

export default DiscoverComponent;
