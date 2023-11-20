import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowUp from '../../assets/images/arrow_back_1.svg';
import ArrowDown from '../../assets/images/arrow_back_2.svg';
import './index.scss';

/**
 * Composant Collapse - Affiche un panneau pliable avec un titre et du texte.
 * @component
 * @param {Object} props - Les propriétés du panneau pliable.
 * @param {string} props.title - Le titre du panneau.
 * @param {string|string[]} props.text - Le texte ou un tableau de texte à afficher dans le panneau.
 * @returns {JSX.Element} Le composant de panneau pliable.
 */
function Collapse({title, text}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }
    

  return (
    <div className='collapse'>
        <button onClick={toggleCollapse}>
            <h3 className='collapse__title'>{title}</h3>
            <img
                src={isOpen ? ArrowUp : ArrowDown}
                alt={!isOpen ? 'Flèche vers le haut' : 'Flèche vers le bas'}
            />
        </button>
        {isOpen && <div className={`collapse__text ${isOpen ? 'open' : 'closed'}`}>
                        {Array.isArray(text) ? text.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            )
                            }) : text
                        }
                    </div>}
    </div>
  )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default Collapse