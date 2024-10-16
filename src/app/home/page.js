import Sidebar from "../components/Sidebar";
import Image from "next/image";
import Trending from "../components/Trending";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import MobileNav from "../components/MobileNav";

const getTrending = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
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
  return [data.results[0], data.results[1]];
};

const getPlaying = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
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
  return data.results.slice(0, 5);
};

const getRated = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
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
  return data.results.slice(0, 5);
};

const Home = async () => {
  const trending = await getTrending();
  const playing = await getPlaying();
  const topRated = await getRated();

  return (
    <div>
      <MobileNav currentPage="home"/>
      <div className="page">
        <Sidebar currentPage={"home"} />
        <div className="page-content">
          <SearchBar />
          <Trending trending={trending} />
          <div>
            <h1>Now playing</h1>
            <MovieGrid movies={playing} />
          </div>
          <div>
            <h1>Top rated</h1>
            <MovieGrid movies={topRated} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
