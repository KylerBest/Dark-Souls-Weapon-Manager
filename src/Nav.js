import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({search, setSearch}) {

    function clearSearchBar(){
        setSearch('')
    }

    return (
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <div class="searchBar">
                <input
                    type="text"
                    placeholder='Search weapons'
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <button onClick={clearSearchBar}>Clear</button>
            </div>
        </nav>
    )
}
