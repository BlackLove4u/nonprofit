import React from 'react';

interface ActivityCardProps {
    title: string;
    description: string;
    imageUrl: string;
    audioUrl?: string;
    videoUrl?: string;
    onClick: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, imageUrl, audioUrl, videoUrl, onClick }) => {
    return (
        <div className="activity-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="activity-card-image" />
            <h3 className="activity-card-title">{title}</h3>
            <p className="activity-card-description">{description}</p>
            {audioUrl && <audio controls src={audioUrl} className="activity-card-audio" />}
            {videoUrl && <video controls src={videoUrl} className="activity-card-video" />}
        </div>
    );
};

export default ActivityCard;