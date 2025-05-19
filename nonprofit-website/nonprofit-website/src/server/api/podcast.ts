import { Router } from 'express';
import { Podcast } from '../db/models/podcast';

const router = Router();

// Get all podcast episodes
router.get('/', async (req, res) => {
    try {
        const episodes = await Podcast.find();
        res.status(200).json(episodes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching podcast episodes', error });
    }
});

// Get a single podcast episode by ID
router.get('/:id', async (req, res) => {
    try {
        const episode = await Podcast.findById(req.params.id);
        if (!episode) {
            return res.status(404).json({ message: 'Podcast episode not found' });
        }
        res.status(200).json(episode);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching podcast episode', error });
    }
});

// Create a new podcast episode
router.post('/', async (req, res) => {
    try {
        const newEpisode = new Podcast(req.body);
        await newEpisode.save();
        res.status(201).json(newEpisode);
    } catch (error) {
        res.status(400).json({ message: 'Error creating podcast episode', error });
    }
});

// Update a podcast episode by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedEpisode = await Podcast.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEpisode) {
            return res.status(404).json({ message: 'Podcast episode not found' });
        }
        res.status(200).json(updatedEpisode);
    } catch (error) {
        res.status(400).json({ message: 'Error updating podcast episode', error });
    }
});

// Delete a podcast episode by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedEpisode = await Podcast.findByIdAndDelete(req.params.id);
        if (!deletedEpisode) {
            return res.status(404).json({ message: 'Podcast episode not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting podcast episode', error });
    }
});

export default router;