import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { UserCard, UserDetail } from '../../../Components';
// import { UserCard, UserDetail } from '../../../Components';
import './Main.scss';
import { getUser } from './MainService';

const Main: React.FC = () => {
    const [page] = useState<number>(1);
    const [selectedUuid, setSelectedUuid] = useState<string>('');
    const users = useQuery(['users', page], () => getUser(page), {
        keepPreviousData: true
    });
    return (
        <div className="main-container p-2">
            <div className="main-cards">
                {users.data?.results.map((user: any, i: number) => {
                    return (
                        <UserCard
                            key={i}
                            img={user.picture.large}
                            name={`${user.name.title}.${user.name.first} ${user.name.last}`}
                            onCardClick={() => {
                                setSelectedUuid(user.login.uuid);
                            }}
                        />
                    );
                })}
            </div>
            <div className="main-detail">
                {selectedUuid !== '' &&
                    users.data?.results
                        .filter((el: any) => el.login.uuid === selectedUuid)
                        .map((user: any) => {
                            return (
                                <UserDetail
                                    country={user.location.country}
                                    email={user.email}
                                    img={user.picture.large}
                                    name={`${user.name.title}.${user.name.first} ${user.name.last}`}
                                    telephone={user.phone}
                                />
                            );
                        })}
            </div>
        </div>
    );
};

export default Main;
