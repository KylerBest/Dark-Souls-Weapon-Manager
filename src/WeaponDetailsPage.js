import React from 'react';

export default function WeaponDetailsPage({weapon}) {
    console.log(weapon)
    const {
        attack_type, 
        name, 
        bonus, 
        damage, 
        durability, 
        requirements, 
        weapon_type, 
        weight} = weapon
    return (
        <div className='detailsPage'>
            <h1>{name}</h1>
            <ul>
                <li><h2>Weapon type: {weapon_type}</h2></li>
                <li><h2>Attack type: {attack_type}</h2></li>
                <li><h2>Durability: {durability}</h2></li>
                <li><h2>Weight: {weight}</h2></li>
                <li>
                    <h2>Requirements:</h2>
                    <ul>
                        <li><h3>Dexterity: {requirements.dexterity}</h3></li>
                        <li><h3>Faith: {requirements.faith}</h3></li>
                        <li><h3>Intelligence: {requirements.intelligence}</h3></li>
                        <li><h3>Strength: {requirements.strength}</h3></li>
                    </ul>
                </li>
                <li>
                    <h2>Damage:</h2>
                    <ul>
                        <li><h3>Fire: {damage.fire}</h3></li>
                        <li><h3>Lightning: {damage.lightning}</h3></li>
                        <li><h3>Magic: {damage.magic}</h3></li>
                        <li><h3>Physical: {damage.physical}</h3></li>
                    </ul>
                </li>
                <li>
                    <h2>Scaling Bonus:</h2>
                    <ul>
                        <li><h3>Dexterity: {bonus.dexterity ? bonus.dexterity : 'N/A'}</h3></li>
                        <li><h3>Faith: {bonus.faith ? bonus.faith : 'N/A'}</h3></li>
                        <li><h3>Intelligence: {bonus.intelligence ? bonus.intelligence : 'N/A'}</h3></li>
                        <li><h3>Strength: {bonus.strength ? bonus.strength : 'N/A'}</h3></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
