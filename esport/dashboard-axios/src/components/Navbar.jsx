import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logoEsport from '../assets/logo_esport1.png';
import { User, Menu,} from 'lucide-react';

function Navbar() {
  useEffect(() => {
    const navbarNav = document.querySelector('.navi');
    const menu = document.querySelector('#menu');

    const handleMenuClick = () => {
      navbarNav.classList.toggle('active');
    };

    const handleOutsideClick = (e) => {
      if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
      }
    };

    menu.addEventListener('click', handleMenuClick);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      menu.removeEventListener('click', handleMenuClick);
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
          <a className="droplist">DIVISIONS</a>
          <div className="dropdown-content">
            <a className="pubg" href="">PUBG</a>
            <Link className="ff" to="/ff">FREE FIRE</Link>
            <a className="ml" href="">MOBILE LEGEND</a>
            <Link className="hok" to="/hok">HONOR OF KING</Link>
            <a className="valo" href="">VALORANT</a>
            <a className="dota2" href="">DOTA 2</a>
            <a className="csgo" href="">CSGO</a>
            <a className="point" href="">POINT BLANK</a>
          </div>
        </div>
        
        <a href="#">ABOUT</a>
        <a href="#">MATCH</a>
        <a href="#">PARTNER</a>
        <a href="#">CREATOR</a>
        <a href="#">NEWS</a>
        <Link to="/Store">STORE</Link>
      </div>

      <div className="nav-extra">
        <a href="#" id="user"><User size={20} /></a>
        <a href="#" id="menu"><Menu size={20} /></a>
        
      </div>
      
    </nav>
  );
}

export default Navbar;