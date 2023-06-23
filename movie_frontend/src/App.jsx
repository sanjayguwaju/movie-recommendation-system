import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/movie-card/MovieCard";
import "./App.css";
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/movies/movies-cards-details"
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const filterMovies = () => {
      if (!searchQuery) {
        setFilteredMovies(movies);
        return;
      }

      const regex = new RegExp(searchQuery, "i");
      const filtered = movies.filter((movie) => regex.test(movie.title));
      setFilteredMovies(filtered);
    };

    filterMovies();
  }, [movies, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform any additional logic if needed
  };

  return (
    <div className="App">
      <div className="search-form-container">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by movie name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </form>
        <button className="search-btn">
          <SearchIcon className="search-icon" />
        </button>
      </div>
      <div className="movie-container">
        {filteredMovies.length === 0 && <div>No movies found</div>}
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
