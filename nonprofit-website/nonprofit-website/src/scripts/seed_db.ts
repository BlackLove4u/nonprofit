import { connectToDatabase } from '../server/db/index';
import User from '../server/db/models/user';
import Blog from '../server/db/models/blog';
import Podcast from '../server/db/models/podcast';
import Product from '../server/db/models/product';
import Activity from '../server/db/models/activity';
import Game from '../server/db/models/game';

const seedDatabase = async () => {
    const db = await connectToDatabase();

    await db.dropDatabase();

    const users = await User.insertMany([
        { username: 'admin', password: 'admin123', role: 'admin' },
        { username: 'volunteer', password: 'volunteer123', role: 'volunteer' },
    ]);

    const blogs = await Blog.insertMany([
        { title: 'Welcome to Our Nonprofit', content: 'This is the first blog post.', author: users[0]._id },
        { title: 'How You Can Help', content: 'Here are some ways you can contribute.', author: users[0]._id },
    ]);

    const podcasts = await Podcast.insertMany([
        { title: 'Episode 1: Introduction', description: 'An introduction to our nonprofit.', audioUrl: 'audio/episode1.mp3' },
        { title: 'Episode 2: Volunteer Stories', description: 'Stories from our volunteers.', audioUrl: 'audio/episode2.mp3' },
    ]);

    const products = await Product.insertMany([
        { name: 'T-Shirt', price: 20, description: 'A comfortable t-shirt.', imageUrl: 'assets/images/tshirt.png' },
        { name: 'Mug', price: 10, description: 'A ceramic mug.', imageUrl: 'assets/images/mug.png' },
    ]);

    const activities = await Activity.insertMany([
        { title: 'Community Cleanup', description: 'Join us for a community cleanup event.' },
        { title: 'Fundraising Dinner', description: 'Attend our fundraising dinner to support our cause.' },
    ]);

    const games = await Game.insertMany([
        { title: 'Trivia Night', description: 'Test your knowledge with our trivia game.' },
        { title: 'Scavenger Hunt', description: 'Join us for a fun scavenger hunt.' },
    ]);

    console.log('Database seeded successfully!');
    db.close();
};

seedDatabase().catch(err => {
    console.error('Error seeding database:', err);
});