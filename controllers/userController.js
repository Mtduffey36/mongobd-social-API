const User = require('../models/User');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find().populate('friends').populate('thoughts');
            res.status(200).json(users)
        } catch(err) {
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updateUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const updateUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(updateUser);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    addFriend: async (req, res) => {
        try {
            const updateUser = await User.findByIdAndUpdate (req.params.userId,
                { $push: { friends: req.params.friendId } },
                { new: true }
            );
            res.status(200).json(updateUser);
        } catch(err) {
            res.status(500).json(err)
        }
    },

    removeFriend: async (req, res) => {
        try {
            const updateUser = await User.findByIdAndUpdate (req.params.userId,
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            res.status(200).json(updateUser);
        } catch(err) {
            res.status(500).json(err);
        }
    }
};
