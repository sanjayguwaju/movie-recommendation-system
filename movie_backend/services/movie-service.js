const Movie = require('../models/movies-schema');

const getAllMovies = async () => {
  try {
    const movies = await Movie.find().limit(20);
    return movies;
  } catch (err) {
    throw err;
  }
};

const createMovie = async (movieData) => {
  try {
    const movie = new Movie(movieData);
    const savedMovie = await movie.save();
    return savedMovie;
  } catch (err) {
    throw err;
  }
};

const getMovieById = async (movieId) => {
  try {
    const movie = await Movie.findById(movieId);
    return movie;
  } catch (err) {
    throw err;
  }
};

const updateMovieById = async (movieId, movieData) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
    return updatedMovie;
  } catch (err) {
    throw err;
  }
};

const deleteMovieById = async (movieId) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (err) {
    throw err;
  }
};

// Top rated movies services

const getTopRatedMovies = async () => {
  try {
    const pipeline =  [
      {
        $match: {
          "imdb.rating": { $gte: 7 }, // Filter movies with IMDb rating greater than or equal to 7
          "tomatoes.viewer.rating": { $gte: 3.5 } // Filter movies with viewer rating greater than or equal to 3.5
        }
      },
      {
        $project: {
          title: 1,
          year: 1,
          "imdb.rating": 1,
          "tomatoes.viewer.rating": 1
        }
      },
      {
        $sort: {
          "imdb.rating": -1, // Sort by IMDb rating in descending order
          "tomatoes.viewer.rating": -1 // Sort by viewer rating in descending order
        }
      },
      {
        $limit: 10 // Return only the top 5 movies based on the sorting
      }
    ];

    const result = await Movie.aggregate(pipeline);
    return result;
  } catch (err) {
    throw err;
  }
};


const getAverageDurationByGenre = async () => {
  try {
    const pipeline = [
      {
        $match: {
          year: { $gte: 2000 } // Filter movies released from 2000 onwards
        }
      },
      {
        $unwind: "$cast" // Unwind the cast array
      },
      {
        $group: {
          _id: "$cast", // Group movies by cast member
          totalMovies: { $sum: 1 } // Count the number of movies for each cast member
        }
      },
      {
        $sort: {
          totalMovies: -1 // Sort by the total number of movies in descending order
        }
      },
      {
        $limit: 10 // Return only the top 5 cast members with the most movies
      }
    ];
    const result = await Movie.aggregate(pipeline);
    return result;
  } catch (err) {
    throw err;
  }
};

const getMostCommonCastMembers = async () => {
  try {
    const pipeline = [
      {
        $unwind: '$cast'
      },
      {
        $group: {
          _id: '$cast',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 5
      }
    ];

    const result = await Movie.aggregate(pipeline);
    return result;
  } catch (err) {
    throw err;
  }
};

const getMoviesComments = async () => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "movie_id",
          as: "comments"
        }
      },
      {
        $unwind: "$comments"
      },
      {
        $project: {
          _id: 1,
          movieTitle: "$title",
          castMembers: "$cast",
          commenterName: "$comments.name",
          commenterEmail: "$comments.email",
          commentText: "$comments.text"
        }
      },
      {
        $project: {
          movieTitle: 1,
          castMembers: 1,
          commenterName: 1,
          commenterEmail: 1,
          commentText: 1
        }
      },
      {
        $limit: 10
      }
    ];

    const result = await Movie.aggregate(pipeline);
    return result;
  } catch (err) {
    throw err;
  }
};

const getMoviesCardDetail = async () => {
  try {
    const pipeline = [
      {
        $project: {
          _id: 0,
          title: 1,
          year: 1,
          poster: 1,
          fullplot: 1,
          languages: 1,
          imdb: 1,
          runtime: 1
        }
      },
      {
        $limit: 399
      }
    ];
    const result = await Movie.aggregate(pipeline);
    return result;
  } catch (err) {
    throw err;
  }
};

const getMoviesTitle = async () => {
  try {
    const movies = await Movie.find({},{title: 1, _id: 0}).limit(10);
    console.log(movies);
    return movies; 
  } catch (err) {
    throw new Error(`Failed to get movies title: ${err.message}`);
  }
};

const getActionMovies = async () => {
  try {
    const movies = await Movie.find({genres:"Action"},{title: 1, _id: 0}).limit(10);
    return movies; 
  } catch (err) {
    throw new Error(`Failed to get Action movies: ${err.message}`);
  }
};

const getMoviesReleased = async () => {
  try {
    const movies = await Movie.find({year:{ $gt: 1950}},{title: 1, _id: 0,year: 1}).limit(25);
    return movies; 
  } catch (err) {
    throw new Error(`Failed to get Movies released after 1930: ${err.message}`);
  }
};

const getMoviesDirected = async () => {
  try {
    const movies = await Movie.find({directors:"Steven Spielberg"},{title: 1, _id: 0}).limit(10);
    return movies; 
  } catch (err) {
    throw new Error(`Failed to get Movies released after 1930: ${err.message}`);
  }
};

 const getTomHanksMovies = async () => {
  try {
    const movies = await Movie.find({cast: "Tom Hanks"},{title: 1, _id: 0}).limit(10);
    return movies; 
  } catch (err) {
    throw new Error(`Failed to get Tom Hanks Movies: ${err.message}`);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovieById,
  deleteMovieById,
  getTopRatedMovies,
  getAverageDurationByGenre,
  getMostCommonCastMembers,
  getMoviesComments,
  getMoviesCardDetail,
  getMoviesTitle,
  getActionMovies,
  getMoviesReleased,
  getMoviesDirected,
  getTomHanksMovies,
};