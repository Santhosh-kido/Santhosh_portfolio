import React from 'react';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';
import { educationData, certificationsData } from '../data/content';
import styles from '../styles/Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper" aria-label="Education and Certifications">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">05 / Education</span>
        </div>

        <h2 className="sec-title">
          Academic <span className="accent-text">Foundation</span>
        </h2>

        <div className={styles.educationContainer}>
          {/* Degree & Schooling Timeline */}
          <div className={styles.eduTimeline}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.eduItem}>
                <div className={styles.eduDot} aria-hidden="true">
                  <GraduationCap size={18} className={styles.eduDotIcon} />
                </div>

                <div className={`${styles.eduCard} card-hover`}>
                  <div className={styles.eduYear}>{edu.period}</div>
                  <h3 className={styles.eduInst}>{edu.institution}</h3>
                  <p className={styles.eduDeg}>{edu.degree} · {edu.location}</p>
                  <div className={styles.eduBadge}>
                    <CheckCircle size={14} />
                    <span>Result: {edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className={styles.certsSection}>
            <div className={styles.certsHeader}>
              <Award size={18} className={styles.awardIcon} />
              <h3 className={styles.certsTitle}>Certifications & Courses</h3>
            </div>

            <div className={styles.certsGrid}>
              {certificationsData.map((cert, index) => (
                <div key={index} className={`${styles.certCard} card-hover`}>
                  <div className={styles.certIconBox}>
                    <Award size={18} />
                  </div>
                  <div className={styles.certContent}>
                    <div className={styles.certProv}>
                      {cert.issuer} {cert.date ? `· ${cert.date}` : ''}
                    </div>
                    <h4 className={styles.certNm}>{cert.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
