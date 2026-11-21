import React from 'react';
import { Server, ExternalLink, Clock } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/content';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured);
  const standardProjects = projectsData.filter((p) => !p.featured && !p.inProgress);
  const inProgressProject = projectsData.find((p) => p.inProgress);

  return (
    <section id="projects" className="section-wrapper" aria-label="Featured Projects">
      <div className="container">
        <div className="sec-ey">
          <div className="ey-bar" aria-hidden="true"></div>
          <span className="ey-txt">03 / Projects</span>
        </div>

        <h2 className="sec-title">
          Selected <span className="accent-text">Engineering Work</span>
        </h2>

        <div className={styles.projectsContainer}>
          {/* Featured Project */}
          {featuredProject && (
            <article className={`${styles.featuredCard} card-hover`} aria-labelledby="featured-project-title">
              <div className={styles.projectHeader}>
                <div className={styles.metaLeft}>
                  <div className={styles.projNum}>{featuredProject.id}</div>
                  <span className={styles.featuredBadge}>Featured Deployment</span>
                </div>
                <time className={styles.projectYear}>{featuredProject.year}</time>
              </div>

              <div>
                <h3 id="featured-project-title" className={styles.projectTitle}>
                  {featuredProject.title}
                </h3>
                <p className={styles.projectSummary}>{featuredProject.summary}</p>
              </div>

              <p className={styles.projectDesc}>{featuredProject.description}</p>

              {/* AWS Deployment Detail Line */}
              {featuredProject.detailLine && (
                <div className={styles.deploymentLine}>
                  <Server size={15} aria-hidden="true" />
                  <span>{featuredProject.detailLine}</span>
                </div>
              )}

              {/* Tech Tags */}
              <div className={styles.tagsRow} aria-label="Technologies used">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {featuredProject.github && (
                <div className={styles.actionsRow}>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    aria-label={`View ${featuredProject.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </article>
          )}

          {/* Secondary ML Projects Grid */}
          <div className={styles.secondaryGrid}>
            {standardProjects.map((project) => (
              <article
                key={project.id}
                className={`${styles.projectCard} card-hover`}
                aria-labelledby={`project-title-${project.id}`}
              >
                <div className={styles.projectHeader}>
                  <div className={styles.projNum}>{project.id}</div>
                  <time className={styles.projectYear}>{project.year}</time>
                </div>

                <h3 id={`project-title-${project.id}`} className={styles.cardTitle}>
                  {project.title}
                </h3>

                <p className={styles.cardSummary}>{project.summary}</p>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tagsRow} aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <div className={styles.actionsRow}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon size={16} />
                      <span>View Repository</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* In Progress Item */}
          {inProgressProject && (
            <article
              className={`${styles.inProgressCard} card-hover`}
              aria-labelledby="in-progress-title"
            >
              <div className={styles.projectHeader}>
                <div className={styles.metaLeft}>
                  <div className={styles.projNum}>{inProgressProject.id}</div>
                  <span className={styles.inProgressBadge}>
                    <Clock size={13} />
                    In Progress
                  </span>
                </div>
                <span className={styles.projectYear}>Current Roadmap</span>
              </div>

              <h3 id="in-progress-title" className={styles.cardTitle}>
                {inProgressProject.title}
              </h3>

              <p className={styles.projectDesc}>{inProgressProject.description}</p>

              <div className={styles.tagsRow} aria-label="Target technologies">
                {inProgressProject.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
