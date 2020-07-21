import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/search'>Search</NavLink>
        </div>
    );
}

export default Header;