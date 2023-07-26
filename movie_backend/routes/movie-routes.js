const express = require('express');
const router = express.Router();
const {getAllMoviesController, createMovieController, getMovieByIdController, updateMovieByIdController, deleteMovieByIdController,getTopRatedMoviesController,getAverageDurationByGenreController,getMostCommonCastMembersController,getMoviesCommentsController,getMoviesCardDetailController,getMoviesTitleController,getActionMoviesController,getMoviesReleasedController,getMoviesDirectedbyStevenSpielberg,getTomHanksMoviesController} = require('../controllers/movie-controller');


router.get('/movies', getAllMoviesController);


// Route to create a new movie
router.post('/movies', createMovieController);
router.get('/movies/top-rated',getTopRatedMoviesController);
router.get('/movies/average-duration',getAverageDurationByGenreController);
router.get('/movies/most-common-cast', getMostCommonCastMembersController);
router.get('/movies/movies-comments', getMoviesCommentsController);
router.get('/movies/movies-cards-details', getMoviesCardDetailController);
router.get('/movies/movies-title',getMoviesTitleController);
router.get('/movies/action-movies',getActionMoviesController);
router.get('/movies/movies-released-after-1930',getMoviesReleasedController);
router.get('/movies/tom-hank-movies',getTomHanksMoviesController);
router.get('/movies/directed-by-steven-spielberg',getMoviesDirectedbyStevenSpielberg);


// Route to retrieve a specific movie by ID
router.get('/movies/:id', getMovieByIdController);


// Route to update a specific movie by ID
router.put('/movies/:id', updateMovieByIdController);

// Route to delete a specific movie by ID
router.delete('/movies/:id',deleteMovieByIdController);

// Route to retrieve all movies

// router.get('/movies/genre-count', genreController.getGenreCount);




module.exports = router;