import React from "react";
import "./LanguageSwitch.css";
import { useLanguage } from "../../context/LanguageContext";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage(); // Použij jazyk a přepínač z kontextu

  return (
    <div className="language-switch">
      <button
        className={`language-button ${language === "cs" ? "active" : ""}`}
        onClick={toggleLanguage} // Přepínání jazyků
      >
        CS
      </button>
      <span className="divider">|</span>
      <button
        className={`language-button ${language === "en" ? "active" : ""}`}
        onClick={toggleLanguage} // Přepínání jazyků
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
