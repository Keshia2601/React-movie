import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
//import { getSuggestedMovies, searchMovies } from "../server";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch("http://localhost:3000/suggestions");
    const data = await response.json();
    console.log("Suggested Movies:", data.data?.movies);
    return data.data?.movies;
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const listMovies = await getMovies();
        setMovies(listMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="serach-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
