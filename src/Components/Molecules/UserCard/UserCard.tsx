import React from 'react';
import './UserCard.scss';

const UserCard: React.FC = () => {
    return (
        <div className="card-container p-2">
            <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
            <div className="name">
                <p className="p-1">Adam Kumis</p>
            </div>
        </div>
    );
};

export default UserCard;
