import React from 'react';
import WeaponCard from './WeaponCard';

export default function MainPage({weapons, favorites, setFavorites, search}) {

    return (
        <div className='wrapper'>
            {weapons.map(weapon => 
                <WeaponCard 
                    key={weapon.name}
                    weapon={weapon}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    search={search}
                />
            )}
        </div>
    )
}
