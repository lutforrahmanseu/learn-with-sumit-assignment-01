import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import DreamArea from "./components/DreamArea";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import TeamSection from "./components/TeamSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar scrolling={scrolling} />
      <HeroSection />
      <FeatureSection />
      <DreamArea />
      <AboutSection />
      <CtaSection />
      <FaqSection />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
}
