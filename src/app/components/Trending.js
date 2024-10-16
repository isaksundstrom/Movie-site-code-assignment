"use client";

import Image from "next/image";

const Trending = ({ trending }) => {
  return (
    <div>
      <h1>Trending</h1>
      <div className="movies">
        {trending && trending.map((movie, i) => {
          return (
            <div key={i} className="trending-item">
              <div className="movie-title">
                {movie.title}
                <h3>{movie.release_date.split("-")[0]}</h3>
              </div>
              <Image
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} // Full poster URL
                alt={"the mediom"}
                width={682} // Set the width for the image
                height={382} // Set the height for the image
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
