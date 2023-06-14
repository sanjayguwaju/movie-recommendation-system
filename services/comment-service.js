// comment-service.js
const Comment = require('../models/comments-schema');

const getCommentsByMovieId = async (movieId) => {
  try {
    const comments = await Comment.find({ movie_id: movieId });
    return comments;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getCommentsByMovieId
};