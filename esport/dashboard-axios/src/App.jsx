import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Home />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;