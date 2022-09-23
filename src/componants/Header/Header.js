import React from 'react';
import('./Header.css')

const Header = () => {
    return (
        <div className='headers'>
            <h1>Welcome to my React Countries.</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>

        </div>
    );
};

export default Header;
