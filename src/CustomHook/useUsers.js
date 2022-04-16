import React, { useEffect, useState } from 'react';
import Users from '../Components/Users/Users';

const useUsers = (url) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return users;
}

export default useUsers;