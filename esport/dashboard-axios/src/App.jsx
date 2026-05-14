import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Store from "./pages/Store/Store"; 
import News from "./pages/News/News";
import Valorant from "./pages/Valorant/Valorant";
import Match from "./pages/home/Match";
import Point from "./pages/home/Point";

import MLBBCommunity from "./pages/ridho/MLBBCommunity";
import CSGOCommunity from "./pages/ridho/CSGOCommunity";
import PartnerCommunity from "./pages/ridho/PartnerCommunity";


function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>

      <main>      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/News" element={<News />} />
          <Route path="/Valorant" element={<Valorant />} />
          <Route path="/mlbb" element={<MLBBCommunity />} />
          <Route path="/csgo" element={<CSGOCommunity />} />
          <Route path="/partner" element={<PartnerCommunity />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;