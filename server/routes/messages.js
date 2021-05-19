const router = require('express').Router();
let Message = require('../models/message.model');

// Create a message
router.route('/').post((req, res) => {
    const data = req.body.data;
    const sender = req.body.sender;

    const message = new Message({ data, sender });

    message.save()
        .then(() => res.status(200).json({ message }))
        .catch(err => res.status(400).json(err));
});

// Get all messages
router.route('/').get((req, res) => {
    Message.find({})
        .then(messages => res.status(200).json({ messages }))
        .catch(err => res.status(400).json(err));
});

// Delete a message
router.route('/:id').delete((req, res) => {
    Message.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({}))
        .catch(err => res.status(400).json(err));
});

module.exports = router;