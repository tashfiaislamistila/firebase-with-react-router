import React from 'react';
import useUsers from '../../CustomHook/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {
    const allUsers = useUsers('https://jsonplaceholder.typicode.com/users');

    return (
        <div className='row-container'>
            {
                allUsers?.map(user => <SingleUsers key={user.id} user={user}></SingleUsers>)
            }
        </div>
    );
};

export default Users;