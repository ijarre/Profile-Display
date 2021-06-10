import React from 'react';
import './UserDetail.scss';

interface UserDetailProps {
    img: string;
    name: string;
    telephone: string;
    email: string;
    country: string;
}

const UserDetail: React.FC<UserDetailProps> = (props) => {
    return (
        <div className="user-detail">
            <img src={props.img} alt="" />
            <div className="detail">
                <span className="title p-1">Full Name</span>
                <span>{props.name}</span>
                <span className="title p-1">Telephone</span>
                <span>{props.telephone}</span>
                <span className="title p-1">Email Address</span>
                <span>{props.email}</span>
                <span className="title p-1">Country</span>
                <span>{props.country}</span>
            </div>
        </div>
    );
};

export default UserDetail;
