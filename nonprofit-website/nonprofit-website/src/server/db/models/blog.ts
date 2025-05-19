import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    tags: {
        type: [String],
        default: [],
    },
    image: {
        type: String,
        default: null,
    },
    audio: {
        type: String,
        default: null,
    },
    video: {
        type: String,
        default: null,
    },
});

const Blog = model('Blog', blogSchema);

export default Blog;