import { createContext, useState, useContext } from "react";

import globalTexts from "../data/global.json";
import careerData from "../data/career.json";
import projectsData from "../data/projects.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("cs");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "cs" ? "en" : "cs"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        globalTexts: globalTexts[language],
        careerData: careerData[language],
        projectsData: projectsData[language],
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
