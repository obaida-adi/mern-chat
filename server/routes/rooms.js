const router = require('express').Router();
let Room = require('../models/room.model');

// Create a room
router.route('/').post((req, res) => {
    const name = req.body.name;
    const newRoom = new Room({name});

    newRoom.save()
        .then(() => res.status(200).json({newRoom}))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Get room by ID
router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
        .then(room => res.status(200).json(room))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Add a user to a specific room
router.route('/:id').put((req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            const username = req.body.username;
            room.users.push(username);
            
            room.save()
                .then(() => res.status(200).json({room}))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));    
});

// Delete a room
router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({}))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;