// comment-controller.js

const commentService = require('../services/comment-service');

const getCommentsByMovieId = async (req, res, next) => {
  try {
    const comments = await commentService.getCommentsByMovieId(req.params.movieId);
    res.json(comments);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCommentsByMovieId
};