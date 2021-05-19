const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
});

const User = mongoose.model('User', usersSchema);
module.exports = User;