import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Podcast = () => {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await axios.get('/api/podcast');
                setPodcasts(response.data);
            } catch (error) {
                console.error('Error fetching podcasts:', error);
            }
        };

        fetchPodcasts();
    }, []);

    return (
        <div>
            <h1>Podcast Episodes</h1>
            <ul>
                {podcasts.map((podcast) => (
                    <li key={podcast.id}>
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description}</p>
                        <audio controls>
                            <source src={podcast.audioFileUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <p>Released on: {new Date(podcast.releaseDate).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Podcast;