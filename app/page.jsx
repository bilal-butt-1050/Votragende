"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Collage from "@/components/Collage";
import Footer from "@/components/Footer";
import WorkWithMe from "@/components/WorkWithMe";

export default function Home() {
  useEffect(() => {
    // Initialize animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    }, observerOptions);

    // Observe all fade-up elements
    document.querySelectorAll(".fade-up").forEach((element) => {
      observer.observe(element);
    });

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="portfolio-container">
      <Hero />
      <About />
      <FeaturedWork />
      <Collage />
      <WorkWithMe/>
      <Footer />
    </main>
  );
}