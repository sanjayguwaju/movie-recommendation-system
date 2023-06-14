import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <img src={movie.poster} alt={movie.title} />
      <div className="card-details">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        {showMore && (
          <React.Fragment>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Rating: {movie.imdb.rating}</p>
            <p>Votes: {movie.imdb.votes}</p>
            <p>Plot: {movie.fullplot}{" "} </p>
          </React.Fragment>
        )}
          {!showMore && (
            <button className="show-more-button" onClick={handleShowMore}>
              Show More
            </button>
          )}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    fullplot: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    imdb: PropTypes.shape({
      rating: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieCard;
