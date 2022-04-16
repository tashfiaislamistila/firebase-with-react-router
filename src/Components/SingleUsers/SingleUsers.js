import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({ user }) => {

    const { user, id } = user || {};
    return (
        <div className='col-4 gy-4'>
            <div class="card shadow-sm p-3 mb-5 bg-body rounded" >
                <div class="card-body">
                    <h5 class="card-title">Name : {name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">id : {id}</h6>
                    <Link to={`/user/${id}`} class="card-link">user info</Link>
                </div>
            </div>

        </div>
    );
};

export default SingleUsers;