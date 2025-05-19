import { Router } from 'express';
import { Game } from '../db/models/game';

const router = Router();

// Get all games
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching games', error });
    }
});

// Get a single game by ID
router.get('/:id', async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching game', error });
    }
});

// Create a new game
router.post('/', async (req, res) => {
    const newGame = new Game(req.body);
    try {
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(400).json({ message: 'Error creating game', error });
    }
});

// Update a game by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGame) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(updatedGame);
    } catch (error) {
        res.status(400).json({ message: 'Error updating game', error });
    }
});

// Delete a game by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json({ message: 'Game deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting game', error });
    }
});

export default router;