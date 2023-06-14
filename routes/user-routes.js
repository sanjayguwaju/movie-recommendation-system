const express = require('express');
const { getUserController, createUserController, updateUserController, deleteUserController,getAllUserController } = require('../controllers/user-controller');

const router = express.Router();

// Define routes
router.get('/users/:id', getUserController); // Get a user by ID
router.get('/users', getAllUserController); // Get all users
router.post('/users', createUserController); // Create a new user
router.put('/users/:id', updateUserController); // Update a user by ID
router.delete('/users/:id', deleteUserController); // Delete a user by ID
// router.get('/users/most-active', userController.getMostActiveUsers);

module.exports = router;


// Here are some additional routes that can be created for users:
// GET /users/:id/posts: Retrieve all posts created by a user with the provided ID.

// GET /users/:id/followers: Retrieve all followers of a user with the provided ID.
// GET /users/:id/following: Retrieve all users followed by a user with the provided ID.
// POST /users/:id/follow: Follow a user with the provided ID.
// POST /users/:id/unfollow: Unfollow a user with the provided ID.
// POST /users/:id/posts: Create a new post for a user with the provided ID.
// POST /users/:id/comments: Create a new comment for a user with the provided ID.
// PUT /users/:id/password: Update the password of a user with the provided ID.
// DELETE /users/:id/posts/:postId: Delete a post with the provided ID created by a user with the provided ID.
// DELETE /users/:id/comments/:commentId: Delete a comment with the provided ID made by a user with the provided ID.
// These are just some examples of additional routes that can be created for users. The specific routes you choose to implement will depend on the requirements of your application.

// Here are some additional controllers that can be created for users:
// getAllUsersController: Retrieve all users from the database.
// getUserPostsController: Retrieve all posts created by a user with the provided ID.
// getUserCommentsController: Retrieve all comments made by a user with the provided ID.
// getUserFollowersController: Retrieve all followers of a user with the provided ID.
// getUserFollowingController: Retrieve all users followed by a user with the provided ID.
// followUserController: Follow a user with the provided ID.
// unfollowUserController: Unfollow a user with the provided ID.
// createUserPostController: Create a new post for a user with the provided ID.
// createUserCommentController: Create a new comment for a user with the provided ID.
// updateUserPasswordController: Update the password of a user with the provided ID.
// deleteUserPostController: Delete a post with the provided ID created by a user with the provided ID.
// deleteUserCommentController: Delete a comment with the provided ID made by a user with the provided ID.