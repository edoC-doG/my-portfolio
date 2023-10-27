import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <section>Porttfolio1</section>
      <section>Porttfolio2</section>
      <section>Porttfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
