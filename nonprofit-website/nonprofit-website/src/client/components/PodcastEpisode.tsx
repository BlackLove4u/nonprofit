import React from 'react';

interface PodcastEpisodeProps {
    title: string;
    description: string;
    audioUrl: string;
    publishDate: string;
}

const PodcastEpisode: React.FC<PodcastEpisodeProps> = ({ title, description, audioUrl, publishDate }) => {
    return (
        <div className="podcast-episode">
            <h2>{title}</h2>
            <p>{description}</p>
            <audio controls>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <p className="publish-date">Published on: {new Date(publishDate).toLocaleDateString()}</p>
        </div>
    );
};

export default PodcastEpisode;