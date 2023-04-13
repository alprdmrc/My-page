import { useEffect, useState } from "react";
import { LanguageContext } from "./context/languageContext";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { SITE_DATA_EN, SITE_DATA_TR } from "./data/data";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("eng");
  const [siteData, setSiteData] = useState(SITE_DATA_EN);

  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      document.querySelector("html").classList.add("dark");
      setDarkMode(true);
    } else {
      document.querySelector("html").classList.remove("dark");
      setDarkMode(false);
    }
    if (localStorage.getItem("language") === "tr") {
      setSiteData(SITE_DATA_TR);
    } else {
      setSiteData(SITE_DATA_EN);
    }
  }, []);

  const handleDarkMode = (e) => {
    setDarkMode(e.target.checked);
    document.querySelector("html").classList.toggle("dark");
    localStorage.setItem("darkMode", darkMode ? false : true);
  };

  const toggleLanguage = () => {
    if (language === "eng") {
      setLanguage("tr");
      localStorage.setItem("language", "tr");
      setSiteData(SITE_DATA_TR);
    } else {
      setLanguage("eng");
      localStorage.setItem("language", "eng");
      setSiteData(SITE_DATA_EN);
    }
  };

  return (
    <LanguageContext.Provider value={{ siteData, language, toggleLanguage }}>
      <div className="App">
        <Hero darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
