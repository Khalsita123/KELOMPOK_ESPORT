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
        <a href="#">HOME</a>
        <div className="dropdown">
          <a className="droplist">DIVISIONS</a>
          <div className="dropdown-content">
            <a className="pubg" href="">PUBG</a>
            <a className="ff" href="">FREE FIRE</a>
            <a className="ml" href="">MOBILE LEGEND</a>
            <a className="hok" href="">HONOR OF KING</a>
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
        <a href="#">SHOPE</a>
      </div>

      <div className="nav-extra">
        <a href="#" id="user"><User size={20} /></a>
        <a href="#" id="menu"><Menu size={20} /></a>
        
      </div>
      
    </nav>
  );
}

export default Navbar;