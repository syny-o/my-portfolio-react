import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import Carousel from "./Carousel";

function Hero() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="hero-title">Ondřej Synek</h1>
        <p className="description">Python developer se slabostí pro</p>
        <p className="description-tech">
          <ReactTyped
            strings={[
              "Python",
              "Django",
              "Javascript",
              "React",
              "TailWind",
              "Docker",
              "REST-API",
            ]}
            typeSpeed={100}
            loop
          />
        </p>

        <a className="btn-primary" href="">
          Kontaktovat
        </a>
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
