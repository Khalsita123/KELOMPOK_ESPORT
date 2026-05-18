import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";
import Store from "./pages/Store/Store";
import Ff from "./pages/ff/ff";
import Hok from "./pages/hok/hok";
import About from "./pages/about/About";

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
          <Route path="/ff" element={<Ff />} />
          <Route path="/hok" element={<Hok />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}


export default App;