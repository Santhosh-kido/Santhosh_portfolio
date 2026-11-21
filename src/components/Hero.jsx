import React, { useState } from 'react';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData, heroData } from '../data/content';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.setAttribute('data-scroll-state', 'active');
      const headerHeight = 72;
      const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = Math.max(0, elementPosition - headerHeight);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="hero" className={styles.heroSection} aria-label="Introduction">
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Main Bio & CTAs */}
          <div className={styles.contentCol}>
            <div className={styles.statusBadge} role="status">
              <span className={styles.statusDot} aria-hidden="true" />
              <span>{personalData.statusText}</span>
            </div>

            <h1 className={styles.name}>{personalData.name}</h1>
            <p className={styles.role}>{personalData.role}</p>

            <p className={styles.intro}>{heroData.intro}</p>

            <div className={styles.ctaRow}>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn btn-primary"
              >
                View projects
                <ArrowDown size={15} />
              </a>

              <a
                href={personalData.resumeUrl}
                download="Santhosh_R_Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={15} />
                Download resume
              </a>

              {/* Social Links */}
              <div className={styles.socialRow} aria-label="Social profiles">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={`mailto:${personalData.email}`}
                  className={styles.socialLink}
                  aria-label="Send Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className={styles.photoCol}>
            <div className={styles.photoWrapper}>
              {!imgError ? (
                <img
                  src={personalData.profileImage}
                  alt={`${personalData.name} profile portrait`}
                  className={styles.photo}
                  width="280"
                  height="280"
                  onError={() => setImgError(true)}
                  loading="eager"
                />
              ) : (
                <div className={styles.photoFallback} aria-label="Monogram portrait">
                  {personalData.wordmark.slice(0, 2)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fact Strip */}
        <div className={styles.factStrip} aria-label="Quick Highlights">
          {heroData.facts.map((fact, index) => (
            <React.Fragment key={fact.label}>
              <div className={styles.factItem}>
                <span className={styles.factLabel}>{fact.label}:&nbsp;</span>
                <strong className={styles.factValue}>{fact.value}</strong>
              </div>
              {index < heroData.facts.length - 1 && (
                <span className={styles.factDivider} aria-hidden="true">
                  /
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
