import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <div className="bg-dark py-5">
            <div className='w-75 mx-auto text-center'>
                <Link className='text-decoration-none text-muted me-3' to='/'>Home</Link>
                <Link className='text-decoration-none text-muted me-3' to='/about'>About Us</Link>
                <Link className='text-decoration-none text-muted me-3' to='/blogs'>Blogs</Link>
                <Link className='text-decoration-none text-muted me-3' to='/login'>Sign in</Link>
            </div>
            <hr className='text-white w-75 mx-auto text-bold' />
            <div className='w-75 mx-auto text-center'>
                <p className='text-muted'>&copy; { currentYear} Warehouse Stock All Rights Reserved </p>
            </div>
      </div>
    );
};

export default Footer;