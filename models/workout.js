const mongoose = require('mongoose');

// Define models
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    name: String,
    weight: Number,
    reps: Number,
    image: { type: String, default: 'test' },
    url: {
      type: String,
    },
    title: String,
    createdBy: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Workout', workoutSchema);
