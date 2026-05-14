import { Link } from 'react-router-dom';
import logoEsport from '../assets/logo_esport1.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src={logoEsport} alt="Logo" />
        </div>

        <div className="footer-col">
          <h4>HILING STRIKE</h4>
          <a href="#">About</a>
          <a href="#">Match</a>
          <a href="#">News</a>
          <a href="#">Shop</a>
          <a href="#">Partners</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-col">
          <h4>DIVISIONS</h4>
          <a href="#">Mobile Legends</a>
          <a href="#">PUBG Mobile</a>
          <a href="#">FREE FIRE</a>
          <a href="#">VALORANT</a>
          <a href="#">Honor of Kings</a>
          <Link to="/Point">Point Blank</Link>
          <a href="#">Counter Strike</a>
          <a href="#">Dota2</a>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="footer-socials">
            <a href="#">IG</a>
            <a href="#">YT</a>
            <a href="#">FB</a>
            <a href="#">X</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>PT HILING</h4>
          <p>Gedung HILING, Lt. 24</p>
          <p>Jl. Pugaran2. Maguwoharjo. Depok</p>
          <p>YOGYAKARTA, 10220</p>
          <p>No Telp: 08822451679</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Made by Tim Hiling</p>
      </div>
    </footer>
  );
}

export default Footer;