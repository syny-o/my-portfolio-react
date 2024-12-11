import "./App.css";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import { Projects } from "./components/MyProjects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Technologies from "./components/Technologies/Technologies";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import LanguageSwitch from "./components/Shared/LanguageSwitch";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <>
      <div className="App">
        <LanguageProvider>
          <LanguageSwitch />
          <Navbar />
          <Hero />
          <Technologies />
          <Experience />
          <Projects />
          <ContactForm />
          <Footer />
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
