import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData, navLinks } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const headerRef = useRef(null);

  // Monitor scroll for compact header styling and active link detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy to highlight current active link
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // detection offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#hero');
      setActiveSection('hero');
      return;
    }

    const elem = document.getElementById(targetId);
    if (elem) {
      elem.setAttribute('data-scroll-state', 'active');
      const headerHeight = 72; // header height in px
      // Calculate scroll position so heading has a clean, tight, proportional gap below navbar
      const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = Math.max(0, elementPosition - headerHeight);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      ref={headerRef}
    >
      <div className={`container ${styles.navContainer}`}>
        <a
          href="#hero"
          className={styles.wordmark}
          onClick={(e) => scrollToSection(e, 'hero')}
          aria-label="Santhosh R Home"
        >
          {personalData.wordmark.slice(0, 2)}
          <span className={styles.wordmarkDot}>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, targetId)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {link.label}
                {isActive && <span className={styles.activeIndicator} aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              <Sun size={17} strokeWidth={2} />
            ) : (
              <Moon size={17} strokeWidth={2} />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={styles.hireBtn}
          >
            Hire me
            <ArrowUpRight size={13} style={{ verticalAlign: 'middle', marginLeft: '3px' }} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className={styles.mobileMenu}
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                onClick={(e) => scrollToSection(e, targetId)}
              >
                <span>{link.label}</span>
                {isActive && <span className={styles.mobileActiveDot} />}
              </a>
            );
          })}
          <div className={styles.mobileActions}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Hire me
              <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
