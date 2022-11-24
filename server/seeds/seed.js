const db = require('../config/connection');
const { Food } = require('../models');
const { Exercise } = require('../models')


const exerciseData = require('./exerciseData.json');
const foodData = require('./foodData.json');

db.once('open', async () => {
  await Exercise.deleteMany({});

  const exercises = await Exercise.insertMany(exerciseData);

  console.log('Exercises seeded!');
  process.exit(0);
});
