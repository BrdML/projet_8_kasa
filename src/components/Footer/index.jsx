import React from 'react';
import Logo from '../../assets/images/LOGOFO.png';
import './index.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <img className='footer__img' src={Logo} alt="logo footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer