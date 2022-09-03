const mongoose = require('mongoose');

// Define models
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    workoutName: String,
    weight: String,
    reps: String,
    type: String,
    // image: { type: String, default: 'test' },
    // url: {
    //   type: String,
    // },
    // title: String,
    // createdBy: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Workout', workoutSchema);
