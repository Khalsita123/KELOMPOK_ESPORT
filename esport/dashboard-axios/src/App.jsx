import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Store from "./pages/Store/Store"; 

import MLBBCommunity from "./components/MLBBCommunity";

function HomePage() {
  return (
    <>
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
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/mlbb" element={<MLBBCommunity />} />
    </Routes>
  );
}

export default App;