const { createUser,getUser,updateUser,deleteUser,getAllUser} = require('../services/user-services');

const getUserController = async (req, res,next) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters
    const user = await getUser(userId); // Retrieve the user from the database using the user ID
    res.status(200).json(user); // Send the user object as JSON
    if (!user) {
      // If the user is not found, return a 404 Not Found response
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    next(err);
  }
};
/**
 * Controller function to handle POST requests to create a new user.
 * Calls the createUser service function with the request body to create a new user in the database.
 * If successful, sends a 201 Created response with the newly created user object as JSON.
 * If unsuccessful, passes the error to the next middleware function in the request-response cycle.
 */
const createUserController = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};


const updateUserController = async (req, res, next) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters
    const userData = req.body; // Get the updated user data from the request body

    const updatedUser = await updateUser(userId, userData); // Update the user in the database

    if (!updatedUser) {
      // If the user is not found, return a 404 Not Found response
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser); // Send the updated user object as JSON
  } catch (err) {
    next(err);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const userId = req.params.id; // Get the user ID from the request parameters

    const deletedUser = await deleteUser(userId); // Delete the user from the database

    if (!deletedUser) {
      // If the user is not found, return a 404 Not Found response
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(deletedUser); // Send the deleted user object as JSON
  } catch (err) {
    next(err);
  }
};

const getAllUserController = async (req, res, next) => {
  try {
    const users = await getAllUser(); // Retrieve all users from the database

    res.status(200).json(users); // Send the users array as JSON
  } catch (err) {
    next(err);
  }k
};

module.exports = { 
  getUserController,
  createUserController,
  updateUserController,
  deleteUserController,
  getAllUserController,
};