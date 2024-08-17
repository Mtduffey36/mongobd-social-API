const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defaults: Date.now
    }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        require: true,
    },
    reactions: [
        reactionSchema
    ]
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;