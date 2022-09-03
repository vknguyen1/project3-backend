const Workout = require('../models/workout');
const router = require('express').Router();

// Index Route

router.get('/', async (req, res) => {
  try {
    res.json(await Workout.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// WORKOUT CREATE ROUTE
router.post('/', async (req, res) => {
  //   for (let key in req.body) {
  //     if (req.body[key] === '') {
  //       delete req.body[key];
  //     }
  //   }

  try {
    console.log(req.body);
    // send all workouts
    res.json(await Workout.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json({ message: `bad request` });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    res.status(200).json(await Workout.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: `bad request` });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    res.status(200).json(
      await Workout.findByIdAndUpdate(
        //findByIdandUpdate has 4 Params
        // 1) is finding ID
        req.params.id,
        // 2) getting the information
        req.body,
        // 3) new: true return new value of object to see what it is udpated to. if false, then get old one.
        { new: true },
        // 4) callback
      ),
    );
  } catch (error) {
    res.status(400).json({ message: `bad request` });
  }
});

module.exports = router;
