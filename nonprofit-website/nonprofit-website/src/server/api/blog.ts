import { Router } from 'express';
import { Blog } from '../db/models/blog';

const router = Router();

// Get all blog posts
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog posts', error });
    }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blog post', error });
    }
});

// Create a new blog post
router.post('/', async (req, res) => {
    const { title, content, date, category } = req.body;

    const newBlog = new Blog({
        title,
        content,
        date,
        category,
    });

    try {
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog post', error });
    }
});

// Update a blog post by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog post', error });
    }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog post not found' });
        }
        res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog post', error });
    }
});

export default router;