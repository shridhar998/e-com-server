const { Pool } = require('pg');

const pool = new Pool({
  connectionString:  process.env.POSTGRES_URL+ "?sslmode=require",
});
console.log(pool.options.connectionString)
// Function to create a new user
async function createUser({ email, name }) {
  const query = 'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING *';
  const values = [email, name];

  const result = await pool.query(query, values);
  return result.rows[0];
}

// Function to get all users
async function getAllUsers() {
  const query = 'SELECT * FROM users';
  const result = await pool.query(query);
  return result.rows;
}

// Function to update user by ID
async function updateUser(id, { email, name }) {
  const query = 'UPDATE users SET email = $1, name = $2 WHERE id = $3';
  const values = [email, name, id];
  await pool.query(query, values);
}

// Function to delete user by ID
async function deleteUser(id) {
  const query = 'DELETE FROM users WHERE id = $1';
  await pool.query(query, [id]);
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
