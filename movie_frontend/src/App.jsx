import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/movie-card/MovieCard";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/movies/movies-cards-details"
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
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by movie name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {filteredMovies.length === 0 && <div>No movies found</div>}
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
