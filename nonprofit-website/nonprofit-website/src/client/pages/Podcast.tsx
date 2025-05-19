import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PodcastEpisode from '../components/PodcastEpisode';

const Podcast = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await axios.get('/api/podcast');
                setEpisodes(response.data);
            } catch (error) {
                console.error('Error fetching podcast episodes:', error);
            }
        };

        fetchEpisodes();
    }, []);

    return (
        <div className="podcast-page">
            <h1>Podcast Episodes</h1>
            <div className="podcast-episodes">
                {episodes.length > 0 ? (
                    episodes.map((episode) => (
                        <PodcastEpisode key={episode.id} episode={episode} />
                    ))
                ) : (
                    <p>No episodes available.</p>
                )}
            </div>
        </div>
    );
};

export default Podcast;