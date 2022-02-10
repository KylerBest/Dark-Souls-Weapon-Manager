import React from 'react';
import Nav from './Nav';

export default function Header({search, setSearch}) {
    return (
        <header>
            <h1>Dark Souls Weapon Manager</h1>
            <Nav 
                search={search}
                setSearch={setSearch} 
            />
        </header>
    )
}
