import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="bg-dark py-5">
            <div className='w-75 mx-auto text-center'>
                <Link className='text-decoration-none text-muted me-3' to='/'>Home</Link>
                <Link className='text-decoration-none text-muted me-3' to='/about'>About Us</Link>
                <Link className='text-decoration-none text-muted me-3' to='/blogs'>Blogs</Link>
                <Link className='text-decoration-none text-muted me-3' to='/login'>Sign in</Link>
            </div>
            <hr className='text-white w-75 mx-auto text-bold'/>
      </div>
    );
};

export default Footer;