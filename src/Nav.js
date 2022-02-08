import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({setSearch}) {
    return (
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <input 
                type="text" 
                placeholder='Search weapons' 
                onChange={e => setSearch(e.target.value)} 
            />
        </nav>
    )
}
