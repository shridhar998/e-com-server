const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(express.json());
app.use(cors())

// Include your routes
const userRoutes = require('./controllers/userController');
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
