import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HobbyData } from '../info/hobbydata';

const HobbyCaption = () => {
    const { hobbyID } = useParams();
    const hobby = HobbyData.find(h => h.id === hobbyID);

    return (
        <div>
            <h2>{hobby.name}</h2>
            <img src={hobby.image} alt={hobby.title} className="img-fluid rounded" />
            <p>{hobby.description}</p>
            <Link to="/hobbies" className="btn btn-secondary">Back to Hobbies</Link>
        </div>
    );
}

export default HobbyCaption;