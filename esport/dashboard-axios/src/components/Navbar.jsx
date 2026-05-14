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
          <Link className="droplist" to="/droplist">DIVISIONS</Link>
          <div className="dropdown-content">
            <Link className="pubg" to="/pubg">PUBG</Link>
            <Link className="ff" to="/ff">FREE FIRE</Link>
            <Link className="ml" to="/ml">MOBILE LEGEND</Link>
            <Link className="hok" to="/hok">HONOR OF KING</Link>
            <Link className="dota" to="/dota">DOTA</Link>
            <Link className="valo" to="/valo">VALORANT</Link>
            <Link className="csgo" to="/csgo">CSGO</Link>
            <Link className="point" to="/point">POINT BLANK</Link>
          </div>
        </div>
        
        <Link to="/About">ABOUT</Link>
        <Link to="/Match">MATCH</Link>
        <Link to="/Partner">PARTNER</Link>
        <Link to="/Creator">CREATOR</Link>
        <Link to="/News">NEWS</Link>
        <Link to="/Store">STORE</Link>
      </div>

      <div className="nav-extra">
        <Link to="/User" id="user"><User size={20} /></Link>
        <Link to="/Menu" id="menu"><Menu size={20} /></Link>
      </div>
      
    </nav>
  );
}

export default Navbar;