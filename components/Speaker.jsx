"use client";

import "../app/styles/_speaker.css";

export default function Speaker() {
  return (
    <section id="about" className="about">
      <div className="fade up speaker-container">
        <div className="fade up about-spacer">
          <img src="/images/hand.jpg" alt="" />
        </div>

        {/* Right image + waves */}
        <div className="about-images">
          <div className="images-container fade-up stagger-children">


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


