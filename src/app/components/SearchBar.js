"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchForMovies = async () => {
        setLoading(true)
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
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
      setLoading(false)
    };

    if (searchTerm) searchForMovies();

  }, [searchTerm])

  return (
    <div>
    <input
      type="text"
      placeholder="Search movie titles"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {(searchTerm && movies && !loading) && <div>
        <h1>Search</h1>
        <MovieGrid movies={movies}/>
        </div>}
    </div>

  );
};

export default SearchBar;
