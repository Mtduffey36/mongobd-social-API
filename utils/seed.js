const path = require('path');
const mongoose = require('mongoose');
const { User, Thought } = require('../models'); 
const { users, thoughts } = require('./data');
require(path.join(__dirname, '../config/connection'));

const seedDatabase = async () => {
  try {
    
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(users);

    for (let i = 0; i < thoughts.length; i++) {
      const thought = thoughts[i];
      const user = createdUsers.find(user => user.username === thought.username);

      const newThought = await Thought.create({ ...thought, userId: user._id });
      
      await User.findByIdAndUpdate(user._id, { $push: { thoughts: newThought._id } });
    }

    console.log('Database seeded successfully');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};


seedDatabase();