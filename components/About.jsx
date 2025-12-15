"use client";

import "../app/styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left empty space */}
        <div className="about-spacer"></div>

        {/* Right image + waves */}
        <div className="about-images">
          <div className="images-container">


            {/* Sound waves originating from left of image */}
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
         {/* Image */}
            <img
              src="/images/pic6.png"
              alt="Artist"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
