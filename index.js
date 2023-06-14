const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/default');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/user-routes');
const movieRoutes = require('./routes/movie-routes');
const commentRoutes = require('./routes/comment-routes');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors())
app.use(morgan('dev')) 
app.use(express.json()) 
app.use(express.urlencoded({extended:true})) 

// MongoDB connection
const mongoURI = config.mongoURI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api',userRoutes);
app.use('/api', movieRoutes);
app.use('/api', commentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});