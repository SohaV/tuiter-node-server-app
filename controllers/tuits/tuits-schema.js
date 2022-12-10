import mongoose from "mongoose";
const schema = new mongoose.Schema({
    tuit: {type: String, default: "This is a tuit test"},
    likes: Number,
    liked: Boolean,
    handle: {type: String, default: "@testHandle"},
    image: {type: String, default: "../../images/spacex.jpg"},
    topic: {type: String, default: "Sample Title"},
    time: {type: String, default: "2h"},
    dislikes: {type: Number, default: 0},
    replies: {type: Number, default: 0},
    retuits: {type: Number, default: 0},
    userName: {type: String, default: 'sampleUserName'}
}, {collection: 'tuits'});
export default schema;