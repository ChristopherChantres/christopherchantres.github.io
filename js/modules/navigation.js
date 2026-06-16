/** Navigation behaviour: smooth scroll, navbar hide-on-scroll, keyboard nav. */
export class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.lastScrollY = window.scrollY;
    this.init();
  }

  init() {
    this.enableSmoothScroll();
    this.enableNavbarScroll();
    this.enableKeyboardNav();
  }

  enableSmoothScroll() {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      });
    });
  }

  enableNavbarScroll() {
    if (!this.navbar) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const goingDown = y > this.lastScrollY && y > 200;
      this.navbar.style.transform = goingDown ? 'translateY(-100%)' : 'translateY(0)';
      this.lastScrollY = y;
    });
  }

  enableKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        document.getElementById('theme-toggle-btn')?.click();
      }
    });
  }
}
