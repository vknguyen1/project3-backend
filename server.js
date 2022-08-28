// dependencies

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const workoutsRouter = require('./controllers/workouts');

//initialize the app

const app = express();

// configure settings
require('dotenv').config();
const { PORT = 4000, DATABASE_URL } = process.env;

// Connect to MongoDB using mongoose
mongoose.connect(DATABASE_URL);

// Mount Middleware
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.connection.on('error', (error) =>
  console.log('MongoDB Error:' + error.message),
);

//body parsing middleware urlencoded()serverside rendering and json()clientside rendering
app.use(express.json());
app.use(cors());
app.use(logger('dev'));

// mount routes

app.get('/', (req, res) => {
  res.send('Welcome to fitness API');
});

app.use('/api/workout', workoutsRouter);

// fallback route or catch all route

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'notfound' });
});

// Tell the App to listen
app.listen(PORT, () => {
  console.log(`express is listening on port: ${PORT}`);
});
