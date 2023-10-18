const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await userModel.createUser(req.body);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    await userModel.updateUser(req.params.id, req.body);
    res.json({ message: 'User updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    await userModel.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
