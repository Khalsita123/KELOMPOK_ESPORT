import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partner from "./components/Partner";
import Division from "./components/Devision";
import Creator from "./components/Creator";
import News from "./components/News";
import Match from "./components/Match";
import Contact from "./components/Contact";
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
        <Hero />
        <About />
        <Partner />
        <Division />
        <Creator />
        <News />
        <Match />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;