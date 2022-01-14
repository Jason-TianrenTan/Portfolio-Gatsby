import React from 'react';
import Navbar from './navbar';
import Header from './header';

const NavHeaderContainer = () => {
    return (
        <div className='top-container'>
            <Navbar />
            <Header/>
        </div>
    )
}

export default NavHeaderContainer