import "./App.css";
import Hero from "./Hero";
import Nav from "./components/Nav";
import About from "./components/About";

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

      </div>
    </>
  );
}

export default App;
