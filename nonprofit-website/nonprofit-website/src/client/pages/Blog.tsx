import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/blog');
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts: {error.message}</div>;

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            {posts.length === 0 ? (
                <p>No blog posts available.</p>
            ) : (
                posts.map(post => (
                    <BlogPost key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default Blog;