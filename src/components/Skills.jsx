import React from 'react';
import { skillsData } from '../data/content';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper" aria-label="Technical Skills">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">02 / Skills</span>
        </div>

        <h2 className="sec-title">
          Technical <span className="accent-text">Expertise</span>
        </h2>

        <div className={styles.skillsGrid}>
          {skillsData.map((category) => (
            <div key={category.category} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.tagsWrapper}>
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
