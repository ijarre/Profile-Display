import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { UserCard, UserDetail } from '../../../Components';
// import { UserCard, UserDetail } from '../../../Components';
import './Main.scss';
import { getUser } from './MainService';

const Main: React.FC = () => {
    const [page] = useState<number>(1);
    const [selectedId, setSelectedId] = useState<string>('');
    const users = useQuery(['users', page], () => getUser(page), {
        keepPreviousData: true
    });
    return (
        <div className="main-container p-2">
            {console.log(users.data)}
            <div className="main-cards">
                {users.data?.results.map((user: any, i: number) => {
                    return (
                        <UserCard
                            key={i}
                            img={user.picture.large}
                            name={`${user.name.title}.${user.name.first} ${user.name.last}`}
                            onCardClick={() => {
                                setSelectedId(user.id.value);
                            }}
                        />
                    );
                })}
            </div>
            <div className="main-detail">
                {selectedId !== '' &&
                    users.data?.results
                        .filter((el: any) => el.id.value !== selectedId)
                        .map((user: any) => {
                            <UserDetail
                                country={user.location.country}
                                email={user.email}
                                img={user.picture.large}
                                name={`${user.name.title}.${user.name.first} ${user.name.last}`}
                                telephone={user.phone}
                            />;
                        })}
            </div>
        </div>
    );
};

export default Main;
