import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Store from "./pages/Store/Store";
import Pubg from "./pages/pubg/pubg";
import Creator from "./pages/creator/creator";
import Dit from "./pages/creator/dit";
import Bri from "./pages/creator/bri";
import Tzy from "./pages/creator/tzy";
import Store from "./pages/Store/Store"; 
import News from "./pages/News/News";
import Valorant from "./pages/Valorant/Valorant";
import Store from "./pages/Store/Store";
import Match from "./pages/home/Match";
import Point from "./pages/home/Point";

import MLBBCommunity from "./components/MLBBCommunity";
import CSGOCommunity from "./components/CSGOCommunity";


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
          <Route path="/creator" element={<Creator />} />
          <Route path="/tzy" element={<Tzy />} />
          <Route path="/dit" element={<Dit />} />
          <Route path="/bri" element={<Bri />} />
          <Route path="/pubg" element={<Pubg />} />
          <Route path="/News" element={<News />} />
          <Route path="/Valorant" element={<Valorant />} />
          <Route path="/mlbb" element={<MLBBCommunity />} />
          <Route path="/csgo" element={<CSGOCommunity />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;