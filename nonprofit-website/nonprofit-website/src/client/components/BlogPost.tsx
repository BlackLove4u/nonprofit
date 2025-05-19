import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    content: string;
    author: string;
    category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, author, category }) => {
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <p className="post-meta">
                Posted on {date} by {author} in {category}
            </p>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default BlogPost;