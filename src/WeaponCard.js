import React from 'react';
import { Link } from 'react-router-dom';

export default function WeaponCard({weapon, favorites, setFavorites, search}) {
    const {name, weapon_type} = weapon
    const linkName = weapon.name.replaceAll(' ', '+')
    const wikiLink = `https://darksouls.wiki.fextralife.com/${linkName}`
    const isFavorite = favorites.includes(weapon.name)
    const errorMsg = () => alert('Error: failed to connect. Changes will not be saved.')

    function handleFavorite(){
        if(isFavorite){
            fetch(`https://still-escarpment-16824.herokuapp.com/favoriteWeapons/${weapon.name}`, {method: 'DELETE'})
                .then(setFavorites(favorites.filter(w => w !== weapon.name)))
                .catch(errorMsg)
        }else{
            fetch('https://still-escarpment-16824.herokuapp.com/favoriteWeapons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: weapon.name})
            })
                .then(setFavorites([...favorites, weapon.name]))
                .catch(errorMsg)
        }
    }

    function highlightSearched(text){
        if(search && text.toLowerCase().includes(search.toLowerCase())){
            let searchIndex = text.toLowerCase().indexOf(search.toLowerCase())
            return <p>{text.slice(0, searchIndex)}<span className='highlight'>{text.slice(searchIndex, searchIndex + search.length)}</span>{text.slice(searchIndex + search.length)}</p>
        }else return text
    }

    return (
        <div className={isFavorite ? 'card favorite' : 'card'}>
            <h1>{highlightSearched(name)}</h1>
            <h2>Weapon type: {highlightSearched(weapon_type)}</h2>
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
