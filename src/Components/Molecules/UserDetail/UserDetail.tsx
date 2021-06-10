import React from 'react';
import './UserDetail.scss';

const UserDetail: React.FC = () => {
    return (
        <div className="container">
            <div className="user-detail">
                <img
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                    alt=""
                />
                <div className="detail">
                    <span>Full Name</span>
                    <span>Adam Kumis</span>
                    <span>Telephone</span>
                    <span>0888787878</span>
                    <span>Email Address</span>
                    <span>adam.kumis@tebel.com</span>
                    <span>Country</span>
                    <span>Jember</span>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
