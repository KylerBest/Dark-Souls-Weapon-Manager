import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({setSearch}) {
    return (
        <header>
            <h1>Dark Souls Weapon Manager</h1>
            <nav>
                <Link to='/' >Home</Link>
                <input type="text" placeholder='Search weapons' onChange={e => setSearch(e.target.value)} />
                <Link to='/favorites' >Favorites</Link>
            </nav>
        </header>
    )
}
