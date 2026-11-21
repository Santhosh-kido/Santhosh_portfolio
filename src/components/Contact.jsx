import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { contactData } from '../data/content';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    'bot-field': '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData['bot-field']) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          'bot-field': formData['bot-field'],
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', 'bot-field': '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Information">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">06 / Contact</span>
        </div>

        <h2 className="sec-title">
          Get in <span className="grad-text">Touch</span>
        </h2>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Links & Info */}
          <div className={styles.infoCol}>
            <p className={styles.invitationText}>{contactData.invitation}</p>

            <div className={styles.contactDetails}>
              {/* Primary Direct Contact Channels */}
              <ul className={styles.primaryLinks}>
                <li>
                  <a href={`mailto:${contactData.email}`} className={styles.cLink}>
                    <div className={styles.iconCircle}>
                      <Mail size={17} />
                    </div>
                    <div className={styles.cTextGroup}>
                      <div className={styles.cVal}>{contactData.email}</div>
                    </div>
                    <ArrowUpRight size={15} className={styles.cArrow} />
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className={styles.compactLink}>
                    <div className={styles.iconCircle}>
                      <Phone size={16} />
                    </div>
                    <div className={styles.cTextGroup}>
                      <div className={styles.cVal}>{contactData.phone}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className={styles.compactLink}>
                    <div className={styles.iconCircle}>
                      <MapPin size={16} />
                    </div>
                    <div className={styles.cTextGroup}>
                      <div className={styles.cVal}>{contactData.location}</div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Social Profiles with Prominent Symbols */}
              <div className={styles.socialSymbolsSection}>
                <ul className={styles.socialSymbolsGrid}>
                  <li>
                    <a
                      href={contactData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.symbolCard}
                      aria-label="GitHub Profile"
                    >
                      <div className={styles.symbolIconBox}>
                        <GithubIcon size={19} />
                      </div>
                      <div className={styles.symbolMeta}>
                        <span className={styles.symbolSub}>{contactData.github}</span>
                      </div>
                      <ArrowUpRight size={15} className={styles.symbolArrow} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.symbolCard}
                      aria-label="LinkedIn Profile"
                    >
                      <div className={styles.symbolIconBox}>
                        <LinkedinIcon size={19} />
                      </div>
                      <div className={styles.symbolMeta}>
                        <span className={styles.symbolSub}>{contactData.linkedin}</span>
                      </div>
                      <ArrowUpRight size={15} className={styles.symbolArrow} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Netlify Contact Form */}
          <div className={styles.formCol}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className={styles.hiddenField}>
                <label>
                  Don’t fill this out:{' '}
                  <input
                    name="bot-field"
                    value={formData['bot-field']}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
              </p>

              <div className={styles.fRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={styles.input}
                    disabled={status === 'submitting'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className={styles.input}
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="form-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className={styles.input}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.messageGroup}`}>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className={styles.textarea}
                  disabled={status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <div className={`${styles.statusMessage} ${styles.successMessage}`} role="alert">
                    <CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    Thank you! Your message has been sent successfully. I will get back to you shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div className={`${styles.statusMessage} ${styles.errorMessage}`} role="alert">
                    <AlertCircle size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    Something went wrong. Please email directly at {contactData.email}.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
