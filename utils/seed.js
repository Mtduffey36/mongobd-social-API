const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');
const connection = require('../config/connection');

const seedDatabase = async() => {
    try {
        await connection;
        await User.deleteMany({});
        await Thought.deleteMany({});

        const createUsers = await User.insertMany(users);

        for (let i = 0; i < thoughts.length; i++) {
            const thought = thoughts[i];
            const user = createUsers.find(user => user.username === thought.username);
            const newThought = await Thought.create({ ...thought, userId: user_id });

            await User.findByIdAndUpdate(user._id,
                { $push: { thoughts:newThought._id } }
            );
        }
        console.log('Database has been seeded!')
    } catch(err) {
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();