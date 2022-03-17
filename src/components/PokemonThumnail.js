import React from 'react'

const PokemonThumnail = ({id, image, name, type, ability, move}) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <small>Abilities: {ability}</small>
                <small>Fav. Moves: {move}</small>
            </div>
        </div>
    )
}

export default PokemonThumnail
