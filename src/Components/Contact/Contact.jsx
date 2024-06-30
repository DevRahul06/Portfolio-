import React from "react";
import contactImage from "../../assets/images/contact-img.svg";
import "./contact.css";

export default function Contact() {
  return (
    <React.Fragment>
      <section class="contact" id="contact">
        <div class="contact-container">
          <div className="contact-content">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">
              If you have any questions or want to discuss a project, please
              fill out the form below and I will get back to you as soon as
              possible.
            </p>
            <form className="contact-form" data-aos="fade-up">  
              <div className="fileds">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input type="text" className="input" placeholder="Enter Name" />
              </div>

              <div className="fileds">
                <label htmlFor="name" className="label">
                  Email
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div className="fileds">
                <label htmlFor="name" className="label">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="8"
                  className="input"
                  placeholder="Type something here...."
                />
              </div>

              <div className="c-btns ">
                <a href="" className="c-btn" type="submit">
                  Submit
                </a>
              </div>
            </form>
          </div>

          <figure class="contact-banner" data-aos="flip-down">
            <img
              src={contactImage}
              loading="lazy"
              alt="contact-banner"
              class="w-100 contact-img"
            />
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
}
