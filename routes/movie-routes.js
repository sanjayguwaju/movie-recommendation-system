const express = require('express');
const router = express.Router();
const {getAllMoviesController, createMovieController, getMovieByIdController, updateMovieByIdController, deleteMovieByIdController,getTopRatedMoviesController,getAverageDurationByGenreController,getMostCommonCastMembersController,getMoviesCommentsController,getMoviesCardDetailController} = require('../controllers/movie-controller');


router.get('/movies', getAllMoviesController);


// Route to create a new movie
router.post('/movies', createMovieController);
router.get('/movies/top-rated',getTopRatedMoviesController);
router.get('/movies/average-duration',getAverageDurationByGenreController);
router.get('/movies/most-common-cast', getMostCommonCastMembersController);
router.get('/movies/movies-comments', getMoviesCommentsController);
router.get('/movies/movies-cards-details', getMoviesCardDetailController);


// Route to retrieve a specific movie by ID
router.get('/movies/:id', getMovieByIdController);


// Route to update a specific movie by ID
router.put('/movies/:id', updateMovieByIdController);

// Route to delete a specific movie by ID
router.delete('/movies/:id',deleteMovieByIdController);

// Route to retrieve all movies

// router.get('/movies/genre-count', genreController.getGenreCount);




module.exports = router;