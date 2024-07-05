import React, { useEffect } from "react";
import HeroImage from "../../assets/images/hero-img.svg";
import "./hero.css";
import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";


export default function Hero() {
  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const Imgvariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0, x: 200 },
  };

  return (
    <React.Fragment>
      <section class="hero" id="hero">
        <div class="container">
          <motion.div
            class="hero-content"
            variants={variant}
            initial="hidden"
            animate="visible"
          >
            <h4 class="hero-subtitle">
              Hi, I'm &nbsp; <span className="tc">DevRahul</span>
            </h4>
            <h2 class="h2 hero-title">
              <span className="stc">Front</span>end Developer
            </h2>
            <p class="hero-text">
              Ahmedabad based Frontend developer creating user-friendly and
              responsive web designs. Turning ideas into digital realities.
            </p>

            <div className="btns">
              <a href="#contact" className="btn hero-btn">
                Get In Touch
              </a>
              <a href="#projects" className="btn hero-btn">
                Browse Projects
              </a>
            </div>
          </motion.div>
          <motion.figure
            class="hero-banner"
            variants={Imgvariant}
            initial="hidden"
            animate="visible"
          >
            <img
              src={HeroImage}
              loading="lazy"
              alt="hero-banner"
              class="w-100 hero-img"
            />
          </motion.figure>
        </div>
      </section>


    </React.Fragment>
  );
}
