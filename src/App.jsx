import "./App.css";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import { Projects } from "./components/MyProjects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
