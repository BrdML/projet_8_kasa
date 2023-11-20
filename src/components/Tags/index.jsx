import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * Composant Tags - Affiche une liste de tags.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.tags - Les tags à afficher.
 * @returns {JSX.Element} Le composant de tags.
 */
function Tags({ tags }) {
  return (
    <div className='logement__tags'>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li className="tags__text" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags