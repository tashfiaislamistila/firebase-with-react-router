import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../CustomHook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')
    if (usersData.length) {
        usersData.length = 4;
    }
    return (
        <div className='container'>
            <h1>Total Users {usersData.length}</h1>
            <div className='row'>
                {
                    usersData?.map(user => <SingleUsers
                        key={user.id}
                        user={user}>
                    </SingleUsers>)
                }
            </div>
            <Link to="/users">Load More...</Link>
        </div>
    )
}

export default Home;