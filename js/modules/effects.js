/** Lightweight visual flourishes: hero typing, scroll progress bar, button ripple. */
import { personal } from '../data/portfolio.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export class TypingEffect {
  constructor() {
    this.el = document.querySelector('.hero-title');
    this.init();
  }

  init() {
    if (!this.el) return;
    const text = personal.name;
    if (prefersReducedMotion) {
      this.el.textContent = text;
      return;
    }
    this.el.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        this.el.textContent += text.charAt(i++);
        setTimeout(type, 90);
      }
    };
    setTimeout(type, 400);
  }
}

export class ScrollProgress {
  constructor() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    this.bar = bar;
    window.addEventListener('scroll', () => this.update(), { passive: true });
  }

  update() {
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const percent = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    this.bar.style.width = `${percent}%`;
  }
}

export class RippleEffect {
  constructor() {
    if (prefersReducedMotion) return;
    document.querySelectorAll('.btn, .theme-btn').forEach((button) => {
      button.addEventListener('click', (e) => this.spawn(e, button));
    });
  }

  spawn(e, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    Object.assign(ripple.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      left: `${e.clientX - rect.left - size / 2}px`,
      top: `${e.clientY - rect.top - size / 2}px`,
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      transform: 'scale(0)',
      animation: 'ripple 0.6s linear',
      pointerEvents: 'none',
    });
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
}

const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(style);
