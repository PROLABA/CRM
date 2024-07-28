import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const {ObjectId} = mongoose.Schema
const postsSchema = mongoose.Schema({
    postOwn: {
        type: String,
        required: true,
        ref: 'Users'
    },
    content: {
        text:{
            type: String,
            required: true
        },
        images: [{
            type: ObjectId,
            required: false,
            default: []
        }]
    },
    likes: {
        required: false,
        type: Number,
        default: 0
    },
    likedUsers: [{
        type: ObjectId,
        ref: 'Users',
        required: false,
        default: []
    }],
    date:{
        time: String,
        day: String
    }
},{
    minimize: false
})

const Posts = mongoose.model('Posts', postsSchema)

export default Posts