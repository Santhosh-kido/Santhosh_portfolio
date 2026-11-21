import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Smooth scroll-driven disappearing animation: older/past content fades out as you scroll down
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main > section');
      const viewportHeight = window.innerHeight;
      const topBoundary = 80; // header height + detection buffer

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();

        // If the section has fully scrolled above the viewport header:
        if (rect.bottom <= topBoundary) {
          sec.setAttribute('data-scroll-state', 'past');
        }
        // If the section is actively within view in the reading viewport:
        else if (rect.top < viewportHeight * 0.75 && rect.bottom > topBoundary) {
          sec.setAttribute('data-scroll-state', 'active');
        }
        // If the section is below the reading area:
        else {
          sec.setAttribute('data-scroll-state', 'upcoming');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial evaluation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="mesh-bg" aria-hidden="true"></div>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
