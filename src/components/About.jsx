import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { aboutData } from '../data/content';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper" aria-label="About Me">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">01 / About Me</span>
        </div>

        <h2 className="sec-title">
          About <span className="grad-text">Me</span>
        </h2>

        <div className={styles.aboutGrid}>
          {/* Main narrative summary */}
          <div className={styles.textCol}>
            <p className={styles.summaryText}>{aboutData.summary}</p>
          </div>

          {/* Currently learning technical focus card */}
          <div className={styles.learningCard}>
            <h3 className={styles.learningTitle}>
              <Sparkles size={16} />
              Currently Learning
            </h3>

            <ul className={styles.learningList}>
              {aboutData.currentlyLearning.map((item, index) => (
                <li key={index} className={styles.learningItem}>
                  <ChevronRight size={15} className={styles.itemBullet} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
