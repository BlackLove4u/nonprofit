import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('/api/blog');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching blog articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Blog Articles</h1>
            <div>
                {articles.length > 0 ? (
                    articles.map(article => (
                        <div key={article.id} className="article">
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                            <p><em>Published on: {new Date(article.date).toLocaleDateString()}</em></p>
                        </div>
                    ))
                ) : (
                    <p>No articles available.</p>
                )}
            </div>
        </div>
    );
};

export default Blog;