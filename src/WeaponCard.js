import React, {useState} from 'react';

export default function WeaponCard({weapon, onClick}) {
    let {name, weapon_type, requirements, bonus} = weapon
    weapon.id = weapon.name
    const wikiLink = `https://darksouls.wiki.fextralife.com/${weapon.name.replace(' ', '+')}`

    function handleClick(){
        onClick(weapon)
    }

    return (
        <div className='card'>
            <h1>{name}</h1>
            <h2>Weapon-type: {weapon_type}</h2>
            <div className='split'>
                    <h3>Requirements:</h3>
                    <h3>Scaling:</h3>
                <ul>
                    <li>Strength: {requirements.strength}</li>
                    <li>Dexterity: {requirements.dexterity}</li>
                    <li>Faith: {requirements.faith}</li>
                    <li>Intelligence: {requirements.intelligence}</li>
                </ul>
                <ul>
                    <li>Strength: {bonus.strength}</li>
                    <li>Dexterity: {bonus.dexterity}</li>
                    <li>Faith: {bonus.faith}</li>
                    <li>Intelligence: {bonus.intelligence}</li>
                </ul>
                <a href={wikiLink} target="_blank">Wiki</a>
                <button onClick={handleClick}>Favorite</button>
            </div>
        </div>
    )
}
