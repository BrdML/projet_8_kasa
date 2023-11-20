import React from 'react';
import PropTypes from 'prop-types';
import starFilled from '../../assets/images/filledstar.svg';
import starEmpty from '../../assets/images/emptystar.svg';
import './index.scss';

/**
 * Composant Stars - Affiche une notation en étoiles en fonction du nombre d'étoiles.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.numberOfStars - Le nombre d'étoiles à afficher (de 0 à 5).
 * @returns {JSX.Element} Le composant d'étoiles.
 */
function Stars({numberOfStars}) {
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<img key={i} src={starFilled} alt="filled star" />);
    }
    
    for (let i = numberOfStars; i < 5; i++) {
        stars.push(<img key={i} src={starEmpty} alt="empty star" />);
    }

  return (
    <div className='host__stars'>
        {stars}
    </div>
  )
}

Stars.propTypes = {
  numberOfStars: PropTypes.string.isRequired,
};

export default Stars