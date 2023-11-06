import { NavLink, useMatch } from 'react-router-dom';
import KasaLogo from '../../assets/images/KasaLogo.svg';
import './index.scss';

function Navbar() {
  const isHomeActive = useMatch({ path: "/" });
  const isAboutActive = useMatch({ path: "/about" });

  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='navbar__nav'>
          <li className='navbar__nav-item'>
          <NavLink to="/">
            <img src={KasaLogo} alt='Kasa logo'/>
          </NavLink>
          </li>
          <div className='navbar__side-link'>
            <li className='navbar__nav-item'>
              <NavLink to="/" className={isHomeActive ? "active" : ""}>Accueil</NavLink> 
            </li>
            <li className='navbar__nav-item'>
              <NavLink to="/about" className={isAboutActive ? "active" : ""}>A Propos</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar