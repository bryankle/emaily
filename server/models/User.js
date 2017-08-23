const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema;
// Schema will determine all of the properties each user is expected to have

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // Communicating to mongoose that we want to create a collection named "Users"