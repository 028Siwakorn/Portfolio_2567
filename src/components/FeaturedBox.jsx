import React from "react";
import me from "../assets/images/me.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Siwakorn Kleebmek</span>
        </div>
        <div className="featured-name">
          I'm <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Hi! I'm Siwakorn, a passionate programmer with a love for creating
            efficient and user-friendly applications. I specialize in [React
            JS], and I have experience working on a variety of projects, from
            web applications . I thrive on problem-solving and enjoy tackling
            challenges head-on. My approach to programming combines creativity
            and analytical thinking, allowing me to develop innovative solutions
            that meet user needs.
          </p>
        </div>
        <div>
          <div className="featured-text-btn">
            <button className="btn">
              Download CV<i className="uil uil-file-alt"></i>
            </button>
          </div>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/1st_firsttttt/"></a>
            <i className="uil uil-instagram"></i>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/siwakorn.kleebmek"></a>
            <i className="uil uil-facebook"></i>
          </div>
          <div className="icon">
            <a href="https://github.com/028Siwakorn"></a>
            <i className="uil uil-github-alt"></i>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={me} alt="me" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
