import React from 'react';
import { useMatch } from 'react-router-dom';
import './index.scss';
import Img_1 from '../../assets/images/Img1.png';
import Img_2 from '../../assets/images/Img2.png';

/**
 * Composant Banner - Affiche une bannière sur la page d'accueil.
 * @component
 * @returns {JSX.Element} Le composant de bannière.
 */

function Banner() {
    const homePage = useMatch({ path: "/" });

    return (
        <div className='banner'>
            <img className='banner__img' src={homePage ? Img_1 : Img_2} alt="" />
            {homePage ? <h1 className='banner__title'>Chez vous, partout et ailleurs</h1> : null}
        </div>
    )
}

export default Banner;