import { Schema, model } from 'mongoose';

const gameSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    assets: {
        images: [{
            type: String,
        }],
        audio: [{
            type: String,
        }],
        videos: [{
            type: String,
        }],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Game = model('Game', gameSchema);

export default Game;