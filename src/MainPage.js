import React, { useState } from 'react';
import WeaponCard from './WeaponCard';

export default function MainPage({weapons, setFavorites, favorites}) {
    
    function onCardClick(weapon){
        setFavorites([...favorites, weapon])
    }

    return (
        <div className='wrapper'>
            {weapons.map(weapon => 
                <WeaponCard 
                    key={weapon.name}
                    weapon={weapon}
                    onClick={onCardClick}
                />
            )}
        </div>
    )
}
