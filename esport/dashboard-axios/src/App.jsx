import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Store from "./pages/Store/Store"; 

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