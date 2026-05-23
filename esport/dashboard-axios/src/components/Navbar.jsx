import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logoEsport from '../assets/logo_esport1.png';
import { User, Menu } from 'lucide-react';

function Navbar() {
  useEffect(() => {
    const navbarNav = document.querySelector('.navi');
    const menu = document.querySelector('#menu');

    if (!navbarNav || !menu) return;

    const handleMenuClick = () => {
      navbarNav?.classList.toggle('active');
    };

    const handleOutsideClick = (e) => {
      if (
        navbarNav &&
        menu &&
        !menu.contains(e.target) &&
        !navbarNav.contains(e.target)
      ) {
        navbarNav.classList.remove('active');
      }
    };

    menu?.addEventListener('click', handleMenuClick);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      menu?.removeEventListener('click', handleMenuClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav>
      <div className="logo">
        <img src={logoEsport} alt="Logo HS" />
      </div>

      <div className="navi">
        <Link to="/">HOME</Link>

        <div className="dropdown">
          <a className="droplist" href="#">
            DIVISIONS
          </a>
          <div className="dropdown-content">
            <Link className="pubg" to="/pubg">PUBG</Link>
            <Link className="ff" to="/freefire">FREE FIRE</Link>
            <Link className="ml" to="/mlbb">MOBILE LEGEND</Link>
            <Link className="hok" to="/honor-of-king">HONOR OF KING</Link>
            <Link className="valo" to="/Valorant">VALORANT</Link>
            <Link className="dota2" to="/dota2">DOTA 2</Link>
            <Link className="csgo" to="/csgo">CSGO</Link>
            <Link className="point" to="/point-blank">POINT BLANK</Link>
          </div>
        </div>

        <Link to="/">ABOUT</Link>
        <Link to="/">MATCH</Link>
        <Link to="/">PARTNER</Link>
        <Link to="/creator">CREATOR</Link>
        <Link to="/News">NEWS</Link>
        <Link to="/Store">STORE</Link>
      </div>

      <div className="nav-extra">
        <a href="#" id="user">
          <User size={20} />
        </a>
        <a href="#" id="menu">
          <Menu size={20} />
        </a>
          <Link className="droplist" to="/droplist">
            DIVISIONS
          </Link>

          <div className="dropdown-content">
            <Link to="/pubg">PUBG</Link>
            <Link to="/freefire">FREE FIRE</Link>
            <Link to="/mlbb">MOBILE LEGEND</Link>
            <Link to="/honor-of-king">HONOR OF KING</Link>
            <Link to="/valorant">VALORANT</Link>
            <Link to="/dota2">DOTA 2</Link>
            <Link to="/csgo">CSGO</Link>
            <Link to="/point">POINT BLANK</Link>
          </div>
        </div>

        <Link to="/about">ABOUT</Link>
        <Link to="/match">MATCH</Link>
        <Link to="/partner">PARTNER</Link>
        <Link to="/creator">CREATOR</Link>
        <Link to="/news">NEWS</Link>
        <Link to="/store">STORE</Link>
      </div>

      <div className="nav-extra">
        <Link to="/user" id="user-btn">
          <User size={20} />
        </Link>

        <button id="menu" type="button">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;