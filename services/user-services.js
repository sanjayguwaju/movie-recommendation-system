const User = require('../models/users-schema');

const getUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    console.log("userhffhsddkhdfkdsfh",user)
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to retrieve user');
  }
};

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create user');
  }
};


const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    // Find the user by ID and update the user data with the provided data
    // The { new: true } option returns the updated user object instead of the old one

    return updatedUser;
  } catch (err) {
    throw new Error(`Failed to update user: ${err.message}`);
  }
};
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    // Find the user by ID and delete the user from the database
    return deletedUser;
  } catch (err) {
    throw new Error(`Failed to delete user: ${err.message}`);
  }
};

const getAllUser = async () => {
  try {
    const users = await User.find().limit(20);
    // Find all users in the database with a limit of 20

    return users;
  } catch (err) {
    throw new Error(`Failed to get users: ${err.message}`);
  }
};
module.exports = { 
  getUser,createUser,updateUser,deleteUser,getAllUser };