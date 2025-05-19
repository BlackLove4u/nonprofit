import React from 'react';

interface GameCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onPlay: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, imageUrl, onPlay }) => {
    return (
        <div className="game-card">
            <img src={imageUrl} alt={title} className="game-card-image" />
            <h3 className="game-card-title">{title}</h3>
            <p className="game-card-description">{description}</p>
            <button className="game-card-button" onClick={onPlay}>
                Play Now
            </button>
        </div>
    );
};

export default GameCard;