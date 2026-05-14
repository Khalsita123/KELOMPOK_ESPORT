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
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;