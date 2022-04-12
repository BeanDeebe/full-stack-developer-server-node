import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    username: String,
    userhandle: String,
    profileImg: {type: String, default: "../images/profile-pic.jpg"},
    retweets: {type: Number, default: 0},
    comments: {type: Number, default: 0},
    time: {type: String, default: "1s"}
}, {collection: 'tuits'});
export default schema;