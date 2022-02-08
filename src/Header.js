import React from 'react';
import Nav from './Nav';

export default function Header({setSearch}) {
    return (
        <header>
            <h1>Dark Souls Weapon Manager</h1>
            <Nav setSearch={setSearch} />
        </header>
    )
}
