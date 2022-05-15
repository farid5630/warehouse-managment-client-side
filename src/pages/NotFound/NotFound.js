import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found d-flex align-items-center justify-content-center'>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;