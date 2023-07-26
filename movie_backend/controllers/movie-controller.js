const movieService = require('../services/movie-service');

const getAllMoviesController = async (req, res, next) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const createMovieController = async (req, res, next) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

const getMovieByIdController = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

const updateMovieByIdController = async (req, res, next) => {
  try {
    const updatedMovie = await movieService.updateMovieById(req.params.id, req.body);
    res.json(updatedMovie);
  } catch (err) {
    next(err);
  }
};

const deleteMovieByIdController = async (req, res, next) => {
  try {
    const deletedMovie = await movieService.deleteMovieById(req.params.id);
    res.json(deletedMovie);
  } catch (err) {
    next(err);
  }
};

const getTopRatedMoviesController = async (req, res, next) => {
  try {
    const result = await movieService.getTopRatedMovies();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getAverageDurationByGenreController = async (req, res, next) => {
  try {
    const result = await movieService.getAverageDurationByGenre();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getMostCommonCastMembersController = async (req, res, next) => {
  try {
    const result = await movieService.getMostCommonCastMembers();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getMoviesCommentsController = async (req, res, next) => {
  try {
    const result = await movieService.getMoviesComments();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
const getMoviesCardDetailController = async (req, res, next) => {
  try {
    const result = await movieService.getMoviesCardDetail();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getMoviesTitleController = async (req, res, next)=> {
  try{
    const movies = await movieService.getMoviesTitle();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const getActionMoviesController = async (req, res, next)=> {
  try{
    const movies = await movieService.getActionMovies();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};

const getMoviesReleasedController = async (req, res, next)=> {
  try{
    const movies = await movieService.getMoviesReleased();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};


const getMoviesDirectedbyStevenSpielberg = async (req, res, next)=> {
  try{
    const movies = await movieService.getMoviesDirected();
    res.json(movies);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllMoviesController,
  createMovieController,
  getMovieByIdController,
  updateMovieByIdController,
  deleteMovieByIdController,
  getTopRatedMoviesController,
  getAverageDurationByGenreController,
  getMostCommonCastMembersController,
  getMoviesCommentsController,
  getMoviesCardDetailController,
  getMoviesTitleController,
  getActionMoviesController,
  getMoviesReleasedController,
  getMoviesDirectedbyStevenSpielberg
};