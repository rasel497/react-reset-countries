import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To My react Website!</h1>

            <nav className='headers'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};


export default Header;