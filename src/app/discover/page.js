import Sidebar from "../components/Sidebar";
import DiscoverComponent from "../components/DiscoverComponent";
import MobileNav from "../components/MobileNav";
import SearchBar from "../components/SearchBar";

const getGenres = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RhMDliYzdkNjQ5ZmIxNWIxOWVhMzA5Mjg5ZjljOSIsIm5iZiI6MTcyOTAzMDY4MS4xODQyODQsInN1YiI6IjY3MGQ1ZWM0ZjU4YTkyMDZhYTQxODc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nXY66XVCaa189f-K4DtQbO1_DWQd3kt8uPlZQuoFv_0",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return data.genres;
};
const Discover = async () => {
  const genres = await getGenres();

  return (
    <div>
      {" "}
      <MobileNav currentPage="discover"/>
      <div className="page">
        <Sidebar currentPage={"discover"} />
        <div className="page-content">
        <SearchBar />
        <div>
            <h1>Discover</h1>
            <DiscoverComponent genres={genres} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
