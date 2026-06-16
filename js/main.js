/** Application entry point — wires modules together once the DOM is ready. */
import { Renderer } from './modules/render.js';
import { ThemeManager } from './modules/theme.js';
import { Navigation } from './modules/navigation.js';
import { TimelineProgress } from './modules/timeline.js';
import { TypingEffect, ScrollProgress, RippleEffect } from './modules/effects.js';

document.addEventListener('DOMContentLoaded', () => {
  // Content must be rendered before behaviours bind to the generated DOM.
  new Renderer().render();

  new ThemeManager();
  new Navigation();
  new TimelineProgress();
  new TypingEffect();
  new ScrollProgress();
  new RippleEffect();
});
