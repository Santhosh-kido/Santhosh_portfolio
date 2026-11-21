import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/content';
import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper" aria-label="Work Experience">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">04 / Experience</span>
        </div>

        <h2 className="sec-title">
          Industry <span className="accent-text">Experience</span>
        </h2>

        <div className={styles.expStack}>
          {experienceData.map((item, index) => (
            <div key={index} className={`${styles.expCard} card-hover`}>
              <div className={styles.expIconBox}>
                <Briefcase size={22} className={styles.briefcaseIcon} />
              </div>

              <div className={styles.expContent}>
                <div className={styles.expOrg}>{item.company}</div>
                <h3 className={styles.expRole}>{item.role}</h3>
                
                <div className={styles.expMeta}>
                  <span className={styles.expDur}>
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className={styles.expLoc}>
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>

                <ul className={styles.pointsList}>
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex} className={styles.pointItem}>
                      <span className={styles.bulletDot} aria-hidden="true"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
