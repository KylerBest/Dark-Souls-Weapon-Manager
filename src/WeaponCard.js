import React from 'react';
import { Link } from 'react-router-dom';

export default function WeaponCard({weapon, favorites, setFavorites}) {
    const {name, weapon_type} = weapon
    const linkName = weapon.name.replaceAll(' ', '+')
    const wikiLink = `https://darksouls.wiki.fextralife.com/${linkName}`
    const isFavorite = favorites.includes(weapon.name)

    function handleFavorite(){
        if(isFavorite){
            fetch(`http://localhost:4000/favoriteWeapons/${weapon.name}`, {method: 'DELETE'})
                .then(setFavorites(favorites.filter(w => w !== weapon.name)))
        }else{
            fetch('http://localhost:4000/favoriteWeapons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: weapon.name})
            })
                .then(setFavorites([...favorites, weapon.name]))
        }
    }

    return (
        <div className={isFavorite ? 'card favorite' : 'card'}>
            <h1>{name}</h1>
            <h2>Weapon-type: {weapon_type.toUpperCase()}</h2>
            <div className='split'>
                <Link 
                    to={`/${linkName}`}
                    className='col-span-2'
                >
                    Details
                </Link>
                <a href={wikiLink} target="_blank">Wiki</a>
                <button onClick={handleFavorite} >{isFavorite ? 'UnFavorite' : 'Favorite'}</button>
            </div>
        </div>
    )
}