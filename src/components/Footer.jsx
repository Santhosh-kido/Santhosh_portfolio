import React from 'react';
import { personalData } from '../data/content';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerContainer}`}>
        <p className={styles.copyright}>
          © 2026 {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
