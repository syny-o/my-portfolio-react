import React from "react";
import { ReactTyped } from "react-typed";
import { HiDownload } from "react-icons/hi";

import "./Hero.css";
import Carousel from "./Carousel";
import Button from "../Shared/Button";

function Hero() {
  return (
    <section className="hero-container">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
      <div class="shape shape5"></div>
      <div class="shape shape6"></div>
      <div class="shape shape7"></div>
      <div class="shape shape8"></div>
      <div class="shape shape9"></div>
      <div class="shape shape10"></div>
      <div className="content">
        <div className="top-blur"></div>
        <div className="avatar-overlay">
          <img className="avatar" src="/assets/avatar/syny.png" alt="" />
        </div>

        <h1 className="hero-title">Ondřej Synek</h1>
        <p className="description">Rád používám...</p>
        <p className="description-tech">
          <ReactTyped
            strings={[
              "Python",
              "Django",
              "PyQt",
              "JavaScript",
              "React JS",
              "TailWind CSS",
              "Bootstrap",
            ]}
            typeSpeed={100}
            loop
          />
        </p>

        <Button
          text={"Stáhnout CV"}
          href={"#"}
          icon={<HiDownload className="icon" />}
        />
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

      {/* <div className="top-blur"></div> */}
      {/* <div className="bottom-blur"></div> */}
    </section>
  );
}

export default Hero;
