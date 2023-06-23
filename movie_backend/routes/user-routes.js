const express = require('express');
const { getUserController, createUserController, updateUserController, deleteUserController,getAllUserController } = require('../controllers/user-controller');

const router = express.Router();

// Define routes
router.get('/users/:id', getUserController); // Get a user by ID
router.get('/users', getAllUserController); // Get all users
router.post('/users', createUserController); // Create a new user
router.put('/users/:id', updateUserController); // Update a user by ID
router.delete('/users/:id', deleteUserController); // Delete a user by ID

module.exports = router;