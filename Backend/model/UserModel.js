const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    }
})

const UserModel = mongoose.model('user',UserScheme);

module.exports = UserModel;