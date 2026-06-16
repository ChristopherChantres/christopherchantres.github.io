/** Handles light/dark theme switching with persistence. */
export class ThemeManager {
  constructor() {
    this.button = document.getElementById('theme-toggle-btn');
    this.current = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    if (!this.button) return;
    this.setTheme(this.current);
    this.button.addEventListener('click', () => this.toggle());
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.current = theme;
    localStorage.setItem('theme', theme);
    this.updateButton();
  }

  toggle() {
    this.setTheme(this.current === 'dark' ? 'light' : 'dark');
  }

  updateButton() {
    const icon = this.button.querySelector('i');
    if (!icon) return;
    const isDark = this.current === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    this.button.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }
}
