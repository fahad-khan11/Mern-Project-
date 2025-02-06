const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    desc : {
        type : String,
    },
    file : {
        type : String,
    }
})

const PostModel = mongoose.model('post',PostSchema);

module.exports = PostModel;