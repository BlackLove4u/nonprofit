import { Schema, model } from 'mongoose';

const podcastSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    audioUrl: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    duration: {
        type: Number, // duration in seconds
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    episodeNumber: {
        type: Number,
        required: true,
    },
});

const Podcast = model('Podcast', podcastSchema);

export default Podcast;