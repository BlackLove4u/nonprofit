import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Our Nonprofit Website</h1>
                <p>Your support makes a difference!</p>
            </header>
            <section className="home-content">
                <h2>About Us</h2>
                <p>We are dedicated to making a positive impact in our community through various initiatives.</p>
            </section>
            <section className="home-activities">
                <h2>Upcoming Activities</h2>
                <ul>
                    <li>Community Clean-Up - March 15, 2025</li>
                    <li>Fundraising Gala - April 20, 2025</li>
                    <li>Volunteer Training - May 5, 2025</li>
                </ul>
            </section>
            <section className="home-media">
                <h2>Media</h2>
                <p>Check out our latest podcasts and blog posts!</p>
                <div className="media-links">
                    <a href="/blog">Visit our Blog</a>
                    <a href="/podcast">Listen to our Podcasts</a>
                </div>
            </section>
        </div>
    );
};

export default Home;