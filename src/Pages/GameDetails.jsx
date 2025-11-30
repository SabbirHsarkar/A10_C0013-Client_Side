import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GameDetails = () => {

    const { myId } = useParams();
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/games.json')
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.log(err));
    }, []);

    const findResult = games.find(g =>g.id == myId);

    if (!findResult) {
        return <p>Loading details...</p>;
    }

    return (
        <div className="p-5 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">{findResult.title}</h2>
            <img className="w-[700Px] h-[400px]" src={findResult?.coverPhoto} alt=""  />
            <p><strong>Genre:</strong> {findResult.category}</p>
            <p><strong>Developer:</strong> {findResult.developer}</p>
            <p><strong>Description:</strong> {findResult.description}</p>
        </div>
    );
};

export default GameDetails;
