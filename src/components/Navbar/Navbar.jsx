import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Navbar.css";
import SocialBox from "../Shared/SocialBox";
import { HiMenuAlt1 } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { globalTexts } = useLanguage();
  return (
    <nav className="navbar">
      {/* <a className="title" href="/">
        <img className="logo" src="/assets/avatar/syny.png" alt="" />
      </a> */}
      {/* <SocialBox /> */}
      <div
        className={menuOpen ? "menu-btn-box menu-btn-box-open" : "menu-btn-box"}
      >
        <img
          className="menu-btn"
          src={
            menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className="menu">
          <ul
            // className={menuOpen ? "menu-items menu-open" : "menu-items"}
            className="menu-items"
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#skills">{globalTexts.sectionSkills}</a>
            </li>
            <li>
              <a href="#experience">{globalTexts.sectionExperience}</a>
            </li>
            <li>
              <a href="#projects">{globalTexts.sectionProjects}</a>
            </li>
            <li>
              <a href="#contact">{globalTexts.sectionForm}</a>
            </li>
          </ul>
          <SocialBox />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
