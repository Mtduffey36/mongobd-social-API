const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        trimmed: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    thoughts: [{
        type: Schema.Types.ObjectId, ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }]
});

const User = model('User', userSchema);

module.exports = User;