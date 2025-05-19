import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('/api/games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="games-page">
            <h1>Games</h1>
            <div className="games-list">
                {games.length > 0 ? (
                    games.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))
                ) : (
                    <p>No games available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Games;