const Thought = require('../models/thought');
const Though = require('../models/thought');

module.exports = { getThoughts: async (req,res) =>{
    try {
        const thoughts = await Thought.find();
        res.status(500).json(thoughts);
    } catch(err) {
        res.status(500).json(err);
    }
    },
    
    createThought: async (req, res) => {
        try {
            const newThought = await Thought.create(req.body);
            res.status(200).json(newThought);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    updateThought: async (req, res) => {
        try {
            const updateThought = await Though.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updateThought)
        } catch(err) {
            res.status(500).json(err);
        }
    },

    deleteThought: async (req, res) => {
        try {
            const deleteThought = await Thought.findByIdAndDelete(req.params.id);
            res.status(200).json(deleteThought)
        } catch(err) {
            res.status(500).json(err);
        }
    },

    addReaction: async (req, res) => {
        try {
            const updateThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
                { $push:  { reactions: req.body } },
                { new: true }
            );
            res.status(200).json(updateThought)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    removeReaction: async (req, res) => {
        try {
            const updateThought = await Thought.findByIdAndUpdate(req.params.thoughtId,
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            );
            res.status(200).json(updateThought)
        } catch(err) {
            res.status(500).json;
        }
    }
};