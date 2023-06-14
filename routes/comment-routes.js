const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment-controller');

// Route to retrieve all comments related to a specific movie
router.get('/comments/:movieId', commentController.getCommentsByMovieId);

module.exports = router;