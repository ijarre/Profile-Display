import React from 'react';
import './UserCard.scss';

const UserCard: React.FC = () => {
    return (
        <div className="card-container p-2">
            <img
                src="https://randomuser.me/api/portraits/med/men/78.jpg"
                alt=""
            />
            <p className="p-1">Adam Kumis</p>
        </div>
    );
};

export default UserCard;
