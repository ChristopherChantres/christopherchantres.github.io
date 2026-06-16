/**
 * Drives the timeline rail: the accent line "grows downward" as the user
 * scrolls, nodes light up once the fill passes them, and cards reveal on enter.
 */
export class TimelineProgress {
  constructor(selector = '.timeline') {
    this.timelines = Array.from(document.querySelectorAll(selector));
    this.ticking = false;
    this.init();
  }

  init() {
    if (!this.timelines.length) return;
    this.revealCardsOnEnter();
    this.update();
    window.addEventListener('scroll', () => this.requestUpdate(), { passive: true });
    window.addEventListener('resize', () => this.requestUpdate());
  }

  requestUpdate() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.update();
      this.ticking = false;
    });
  }

  update() {
    const reference = window.innerHeight * 0.55;

    this.timelines.forEach((timeline) => {
      const progress = timeline.querySelector('.timeline__progress');
      if (!progress) return;

      const rect = timeline.getBoundingClientRect();
      const trackTop = rect.top + 6;
      const trackHeight = rect.height - 12;
      const fill = Math.max(0, Math.min(reference - trackTop, trackHeight));
      progress.style.height = `${fill}px`;

      timeline.querySelectorAll('.timeline-item').forEach((item) => {
        const node = item.querySelector('.timeline-node');
        if (!node) return;
        const nodeCenter = item.offsetTop + node.offsetTop + node.offsetHeight / 2 - 6;
        item.classList.toggle('is-reached', nodeCenter <= fill);
      });
    });
  }

  revealCardsOnEnter() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.timelines.forEach((timeline) => {
      timeline.querySelectorAll('.timeline-item').forEach((item) => observer.observe(item));
    });
  }
}
