import { useState } from 'react';
import PropTypes from 'prop-types';
import leftArrow from '../../assets/images/Back_arrow.svg';
import rightArrow from '../../assets/images/forward_arrow.svg';
import './index.scss';

/**
 * Composant Carousel - Affiche un carrousel d'images avec des flèches de navigation.
 * @component
 * @param {Object} props - Les propriétés du carrousel.
 * @param {string[]} props.images - Les URLs des images à afficher dans le carrousel.
 * @param {string} props.alt - Le texte alternatif de l'image actuellement affichée.
 * @returns {JSX.Element} Le composant de carrousel.
 */
function Carousel(props) {
    const [currentPicture, setCurrentPicture] = useState(0);
    const slidesLength = props.images.length;


    const numberSlide = `${currentPicture + 1} / ${slidesLength}`

    function nextSlide(e) {
        e.preventDefault();
        setCurrentPicture(currentPicture === slidesLength - 1 ? 0 : currentPicture + 1);
    }

    function prevSlide(e) {
        e.preventDefault();
        setCurrentPicture(currentPicture === 0 ? slidesLength - 1 : currentPicture - 1);
    }

    return (
        <div className='carousel'>
            <div className='carousel__container' key={currentPicture}>
                <img className='carousel__img' src={props.images[currentPicture]} alt={props.alt} />
                {slidesLength > 1 && (
                    <div>
                        <span>{numberSlide}</span>
                        <div className='carousel__arrow'>
                        <img className='img-arrow' src={leftArrow} alt="Flèche précédente" onClick={prevSlide}/>
                        <img className='img-arrow' src={rightArrow} alt="Flèche suivante" onClick={nextSlide} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    alt: PropTypes.string.isRequired,
};

export default Carousel;