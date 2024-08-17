const router = require('express').Router

const { getThoughts, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thoughtController');

router.route('/')
    .get(getThoughts)
    .post(createThought);

router.route('/:id')
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtID/reactions/:reactionID')
    .delete(removeReaction);

module.exports = router;