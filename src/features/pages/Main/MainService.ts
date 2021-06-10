import axios from 'axios';
export const getUser = async (page: number) => {
    const { data } = await axios.get(
        `https://randomuser.me/api/?page=${page}&results=15&seed=turnkey`
    );

    return data;
};
