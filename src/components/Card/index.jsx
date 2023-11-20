import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';

/**
 * Composant Card - Affiche une carte avec un titre et une image cliquable redirigeant vers un logement.
 * @component
 * @param {Object} props - Les propriétés de la carte.
 * @param {string} props.id - L'identifiant unique de la carte.
 * @param {string} props.title - Le titre de la carte.
 * @param {string} props.picture - L'URL de l'image de la carte.
 * @returns {JSX.Element} Le composant de carte.
 * @throws {Error} Lance une erreur si les propriétés obligatoires ne sont pas fournies.
 */

function Card({id, title, picture}){

    return (
        <div className='card'>
            <NavLink key={id} to={`/logement/${id}`}>
                <img className='card__picture' src={picture} alt={title} />
                <div className='title'>
                    <h3 className='card__title'>{title}</h3>   
                </div>  
            </NavLink>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    id : '',
    title: '',
    picture: ''
}

export default Card;
