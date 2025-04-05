import "./App.css";
import Hero from "./Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Section from "./components/Section";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav /> {/* reste fixe en haut */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="snap-start h-screen">
          <Hero />
        </section>
        <section className="snap-start h-screen">
          <About />
        </section>
        <section className="snap-start h-screen">
          <Section />
        </section>
        <section className="snap-start h-screen">
          <Contact />
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
