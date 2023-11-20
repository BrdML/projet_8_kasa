import React from 'react';
import './index.scss';

/**
 * Composant Error - Affiche une page d'erreur 404.
 * @returns {JSX.Element} Le composant Error.
 */
function Error() {
  return (
    <div className='error'>
        <div className='error__container'>
            <div className='error__title'>
                <h1>404</h1>
            </div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner à la page d'accueil</a>
        </div>
    </div>
  )
}

export default Error