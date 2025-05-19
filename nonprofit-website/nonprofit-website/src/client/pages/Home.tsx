import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Navbar />
            <header className="home-header">
                <h1>Welcome to Our Nonprofit</h1>
                <p>Your support helps us make a difference in the community.</p>
            </header>
            <main className="home-content">
                <section className="home-intro">
                    <h2>About Us</h2>
                    <p>We are dedicated to providing resources and support for those in need. Explore our website to learn more about our initiatives.</p>
                </section>
                <section className="home-highlights">
                    <h2>Featured Programs</h2>
                    <div className="programs">
                        <div className="program">
                            <h3>Blog</h3>
                            <p>Read our latest articles and stories from the community.</p>
                        </div>
                        <div className="program">
                            <h3>Podcast</h3>
                            <p>Listen to inspiring stories and discussions on our podcast.</p>
                        </div>
                        <div className="program">
                            <h3>Store</h3>
                            <p>Shop our store to support our mission and initiatives.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;