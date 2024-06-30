import React, {useEffect} from "react";
import "./about.css";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import AboutImg from "../../assets/images/about--svg.png";
import CV from "../../assets/pdfs/Rahul_Resume.pdf"
import Aos from "aos";
import 'aos/dist/aos.css'




export default function About() {

  Aos.init({
    duration: 700,
    easing: "ease-in",
    anchorPlacement:"top-bottom",
  })


  return (
    <section className="about" id="about">
      <div   className="about-container">
        <figure data-aos="fade-right" className="about-banner">
          <img
            src={AboutImg}
            loading="lazy"
            alt="about-banner"
            className="w-100 about-img"
          />
        </figure>

        <div className="about-content">
          <h2 class="h2 about-title" data-aos="fade-up">About Me</h2>
          <p className="about-text" data-aos="fade-up">
            Hello! I'm a frontend developer based in Ahmedabad, Gujarat, with
            one year of experience in creating user-friendly and responsive web
            designs. I am passionate about transforming ideas into digital
            realities, ensuring that every project I work on is visually
            appealing and easy to use. My goal is to craft engaging digital
            experiences with clean and efficient code. Let's bring your vision
            to life!
          </p>

          <div className="btns about-btns"  data-aos="fade-up" >
            <a href={CV} download className="btn about-btn">
              Resume
            </a>
            <div className="about-social social">
              <a href="" className="social-icon">
                <FaInstagram />
              </a>
              <a
                href="https://github.com/DevRahul06"
                target="_blank"
                className="social-icon s-color"
              >
                <FaGithub />
              </a>
              <a className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
