import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'reactstrap';
import { UserCard, UserDetail } from '../../../Components';
// import { UserCard, UserDetail } from '../../../Components';
import './Main.scss';
import { getUser } from './MainService';

const Main: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [selectedUuid, setSelectedUuid] = useState<string>('');
    const users = useQuery(['users', page], () => getUser(page), {
        keepPreviousData: true
    });
    return (
        <div className="main-container p-2">
            <div className="main-cards">
                {users.isLoading || users.isFetching ? (
                    <div className="loading">
                        <span>Loading Data...</span>
                    </div>
                ) : (
                    users.data?.results.map((user: any, i: number) => {
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
                    })
                )}
            </div>
            <div className="main-pagination">
                <Button
                    onClick={() =>
                        setPage((old: number) => Math.max(old - 1, 0))
                    }
                    disabled={page === 1}
                >
                    {'<'}
                </Button>
                <span className="current-page">{page.toString()}</span>
                <Button
                    onClick={() => {
                        if (!users.isPreviousData) {
                            setPage((old) => old + 1);
                        }
                    }}
                >
                    {'>'}
                </Button>
            </div>
            <div className="main-detail p-2">
                {selectedUuid !== '' ? (
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
                        })
                ) : (
                    <div className="no-select">
                        <span> Click one card to display it here</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
