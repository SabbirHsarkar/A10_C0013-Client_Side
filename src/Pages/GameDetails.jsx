import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GameDetails = () => {

    const { myId } = useParams();
    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/properties/${myId}`)
            .then(res => res.json())
            .then(data => setProperty(data))
            .catch(err => console.log(err));
    }, [myId]);


    // if (loading) {
    //     return <p>Loading details...</p>;
    // }

    return (
        <div className="p-5 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-3">{property?.name}</h2>
            <img className="w-[700Px] h-[400px]" src={property?.image} alt=""  />
            <p><strong>Genre:</strong> {property?.category}</p>
            
            <p><strong>Description:</strong> {property?.description}</p>
        </div>
    );
};

export default GameDetails;
