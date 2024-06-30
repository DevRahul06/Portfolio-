import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";
import "./skills.css";



export default function Skills() {


  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <div className="skills-name">

          <div data-aos="zoom-out-right" className="html s-card">
            <FaHtml5 className="s-icon" />
            <p className="s-name">HTML</p>
          </div>

          <div data-aos="zoom-out-right" className="css s-card">
            <FaCss3 className="s-icon" />
            <p className="s-name">CSS</p>
          </div>

          <div data-aos="zoom-out-right" className="js s-card">
            <IoLogoJavascript className="s-icon" />
            <p className="s-name">JavaScript</p>
          </div>

          <div data-aos="zoom-out-right" className="react s-card">
            <FaReact className="react-icon s-icon" />
            <p className="s-name">React</p>
          </div>

          <div data-aos="zoom-out-right" className="bootstrap s-card">
            <FaBootstrap className="s-icon" />
            <p className="s-name">Bootstrap</p>
          </div>

          <div data-aos="zoom-out-right" className="tailwind s-card">
            <RiTailwindCssFill className="s-icon" />
            <p className="s-name">Tailwind</p>
          </div>

          <div data-aos="zoom-out-right" className="python s-card">
            <FaPython className="s-icon" />
            <p className="s-name">Python</p>
          </div>

          <div data-aos="zoom-out-right" className="django s-card">
            <SiDjango className="s-icon" />
            <p className="s-name">Django</p>
          </div>
        </div>

        <div className="skills-bar">

          <div data-aos="fade-up" className="html s-line">
            <p className="s-line-name">HTML</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius="5px" bgColor="var(--gradient-color)" completed={90}/>
          </div>
          <div data-aos="fade-up" className="css s-line">
            <p className="s-line-name">CSS</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={70} />
          </div>
          <div data-aos="fade-up" className="js s-line">
            <p className="s-line-name">JavaScript</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={70} />
          </div>

          <div data-aos="fade-up" className="react s-line">
            <p className="s-line-name">React</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={60} />
          </div>

          <div data-aos="fade-up" className="bootstrap s-line">
            <p className="s-line-name">Bootstrap</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={80} />
          </div>

          <div data-aos="fade-up" className="tailwind s-line">
            <p className="s-line-name">Tailwind</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={50} />
          </div>

          <div data-aos="fade-up" className="python s-line">
            <p className="s-line-name">Python</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={68} />
          </div>

          <div data-aos="fade-up" className="django s-line">
            <p className="s-line-name">Django</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={50} />
          </div>

        </div>
        
      </div>
    </section>
  );
}
