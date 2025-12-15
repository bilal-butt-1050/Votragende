"use client";

import "../app/styles/IceCube.css";
import { useEffect } from "react";

export default function IceCubeSection() {
  useEffect(() => {
    const cube = document.querySelector(".icecube");

    const onScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const cubeTop = cube.getBoundingClientRect().top;

      if (cubeTop < triggerPoint) {
        cube.classList.add("freeze");
      } else {
        cube.classList.remove("freeze");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="icecube" className="icecube-section">
      <div className="icecube-container">
        <div className="icecube">
          <h1 className="ice-text">FREEZE</h1>
        </div>
      </div>
    </section>
  );
}
