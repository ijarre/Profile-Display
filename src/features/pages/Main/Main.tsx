import React from 'react';
import { UserCard, UserDetail } from '../../../Components';
import './Main.scss';
const Main: React.FC = () => {
    return (
        <div className="main-container p-2">
            <div className="main-cards">
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
            <div className="main-detail">
                <UserDetail />
            </div>
        </div>
    );
};

export default Main;
