import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: {type: String, default: "This is a tuit test"},
    likes: Number,
    liked: Boolean,
}, {collection: "tuits"});
export default schema;