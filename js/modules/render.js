/** Renders all page content from the portfolio data object into the DOM. */
import { personal, contact, skills, experience, competitions, projects } from '../data/portfolio.js';

export class Renderer {
  render() {
    this.renderHero();
    this.renderResumeLink();
    this.renderSkills();
    this.renderTimeline('experience-timeline', experience);
    this.renderTimeline('competitions-timeline', competitions);
    this.renderTimeline('projects-timeline', projects);
    this.renderContact();
  }

  renderHero() {
    this.setText('.hero-subtitle', personal.title);
    this.setText('.hero-description', personal.description);
    const photo = document.querySelector('.profile-photo');
    if (photo) {
      photo.src = personal.photo;
      photo.alt = personal.name;
    }
  }

  renderResumeLink() {
    const link = document.querySelector('[data-resume-link]');
    if (link) link.setAttribute('href', personal.resume);
  }

  renderSkills() {
    const groups = [skills.languages, skills.technologies, skills.frameworks];
    document.querySelectorAll('.skill-category').forEach((category, index) => {
      const container = category.querySelector('.skill-tags');
      if (!container || !groups[index]) return;
      container.innerHTML = groups[index]
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join('');
    });
  }

  renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cards = items.map((item) => this.buildCard(item)).join('');
    container.innerHTML = `<span class="timeline__progress" aria-hidden="true"></span>${cards}`;
  }

  buildCard(item) {
    const featured = item.featured ? ' is-featured' : '';
    const currentPill = item.current
      ? '<span class="pill pill--current">Current</span>'
      : '';
    const awardPill = item.award
      ? `<span class="pill pill--award"><i class="fas fa-trophy"></i>${item.award}</span>`
      : '';
    const link = item.link
      ? `<a class="timeline-card__link" href="${item.link}" target="_blank" rel="noopener">
           <i class="fas fa-arrow-up-right-from-square"></i> View Project
         </a>`
      : '';
    const tags = item.tech
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join('');
    const highlights = item.highlights
      .map((point) => `<li>${point}</li>`)
      .join('');

    return `
      <article class="timeline-item">
        <span class="timeline-node" aria-hidden="true"></span>
        <div class="timeline-card${featured}">
          <div class="timeline-card__top">
            ${this.buildLogo(item)}
            <div class="timeline-card__heading">
              <div class="timeline-card__title-row">
                <h3 class="timeline-card__title">${item.title}</h3>
                ${currentPill}
              </div>
              <p class="timeline-card__meta">
                <span class="org">${item.org}</span> &middot; ${item.category}
              </p>
            </div>
            <span class="timeline-card__date mono">${item.date}</span>
          </div>
          ${awardPill}
          <ul class="timeline-card__list">${highlights}</ul>
          <div class="tech-stack">${tags}</div>
          ${link}
        </div>
      </article>`;
  }

  buildLogo(item) {
    if (item.logoSrc) {
      return `<span class="timeline-card__logo timeline-card__logo--img">
                <img src="${item.logoSrc}" alt="${item.org} logo" loading="lazy">
              </span>`;
    }
    const style = item.logoColor ? ` style="background:${item.logoColor}"` : '';
    return `<span class="timeline-card__logo"${style} role="img" aria-label="${item.org} logo">${item.logo}</span>`;
  }

  renderContact() {
    const container = document.querySelector('.contact-methods');
    if (!container) return;
    container.innerHTML = `
      <div class="contact-method">
        <i class="fas fa-envelope"></i>
        <a href="mailto:${contact.email}">${contact.email}</a>
      </div>
      <div class="contact-method">
        <i class="fab fa-linkedin"></i>
        <a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a>
      </div>
      <div class="contact-method">
        <i class="fab fa-github"></i>
        <a href="${contact.github}" target="_blank" rel="noopener">GitHub Profile</a>
      </div>`;
  }

  setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  }
}
