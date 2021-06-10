import React from 'react';
import './UserDetail.scss';

const UserDetail: React.FC = () => {
    return (
        <div className="user-detail">
            <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />
            <div className="detail">
                <span className="title p-1">Full Name</span>
                <span>Adam Kumis</span>
                <span className="title p-1">Telephone</span>
                <span>0888787878</span>
                <span className="title p-1">Email Address</span>
                <span>adam.kumis@tebel.com</span>
                <span className="title p-1">Country</span>
                <span>Jember</span>
            </div>
        </div>
    );
};

export default UserDetail;
