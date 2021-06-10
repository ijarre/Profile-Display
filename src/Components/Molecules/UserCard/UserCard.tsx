import React from 'react';
import './UserCard.scss';

interface UserCardProps {
    img: string;
    name: string;
}

const UserCard: React.FC<UserCardProps> = (props) => {
    return (
        <div className="card-container p-2">
            <img src={props.img} alt="" />
            <div className="name">
                <p className="p-1">{props.name}</p>
            </div>
        </div>
    );
};

export default UserCard;
