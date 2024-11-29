import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";

function Hero() {
  return (
    <section className="hero-container">
      <div className="content">
        <img className="avatar" src="/assets/avatar/syny.png" alt="" />
        <h1 className="hero-title">Ondřej Synek</h1>
        <p className="description">Rád používám...</p>
        <p className="description-tech">
          <ReactTyped
            strings={[
              "Python",
              "Django",
              "PyQt",
              "Javascript",
              "React JS",
              "TailWind CSS",
              "Bootstrap",
            ]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button text={"Kontaktovat"} href={"#"} />
      </div>

      {/* <img
        className="hero-img"
        // src="/assets/hero/heroImage.png"
        src="/assets/projects/r2editor.png"
        alt="hero-image"
      /> */}

      <div className="carousel">
        <Carousel />
      </div>

      <div className="top-blur"></div>
      {/* <div className="bottom-blur"></div> */}
    </section>
  );
}

export default Hero;
