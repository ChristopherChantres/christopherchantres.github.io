# Christopher Chantres - Personal Portfolio

A modern, responsive personal portfolio website showcasing my skills, experience, and projects in data science and software engineering.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Mode by Default**: Portfolio starts in dark mode with option to switch to light mode
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Modern UI/UX**: Clean, professional design with modern aesthetics
- **Performance Optimized**: Fast loading and smooth animations
- **Centralized Configuration**: Easy to update content from a single JavaScript object

## 🚀 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modular stylesheets with design tokens (CSS variables) and animations
- **JavaScript (ES Modules)**: Interactive features split into focused modules
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Inter (UI) and JetBrains Mono (dates/tags) typography

## 📱 Sections

1. **Hero Section**: Introduction with profile photo and call-to-action buttons
2. **About**: Personal description and technical skills organized by category
3. **Experience**: Work, leadership and fellowship roles on a scroll-driven timeline
4. **Competitions**: Contests and hackathons with award badges
5. **Projects**: Featured projects with descriptions, technologies, and links
6. **Contact**: Contact information including email, LinkedIn, and GitHub

## 🎨 Design Features

- **CSS Variables**: Easy theme switching and consistent color scheme
- **Grid Layout**: Responsive grid systems for cards and content
- **Animations**: Fade-in effects, hover animations, and smooth transitions
- **Typography**: Hierarchical text styling with proper contrast
- **Spacing**: Consistent spacing system using CSS custom properties

## 🌙 Dark Mode

The portfolio includes a fully functional dark mode that:
- Persists across browser sessions using localStorage
- Automatically applies appropriate color schemes
- Includes smooth transitions between themes
- Maintains accessibility and readability

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Responsive breakpoints at 768px and 480px
- **Flexible Grids**: Adaptive layouts that work on all screen sizes
- **Touch Friendly**: Optimized for touch interactions

## 🎯 Interactive Features

- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Hover Effects**: Cards and buttons have engaging hover animations
- **Theme Toggle**: Click the sun/moon button to switch themes
- **Scroll Progress**: Visual progress bar at the top of the page
- **Keyboard Navigation**: Use arrow keys to navigate sections

## 🚀 Getting Started

The site uses native ES modules, so it must be served over HTTP (opening
`index.html` directly via `file://` will block the module imports). Any static
server works:

```bash
# From the project root
python3 -m http.server 5500
# then open http://localhost:5500
```

Then deploy the folder as-is to any static host (GitHub Pages, Netlify, etc.).

## 📁 File Structure

```
portfolio/
├── index.html              # Page markup and section scaffolding
├── css/
│   ├── main.css            # Entry stylesheet (imports the rest)
│   ├── tokens.css          # Theme color tokens (light + dark)
│   ├── base.css            # Reset, typography, a11y helpers
│   ├── navbar.css          # Navigation bar
│   ├── hero.css            # Hero section + buttons
│   ├── about.css           # About + skills
│   ├── timeline.css        # Timeline rail, cards, logos, badges
│   ├── contact.css         # Contact + footer
│   └── responsive.css      # Media queries + scroll progress bar
├── js/
│   ├── main.js             # Entry point — wires modules together
│   ├── data/portfolio.js   # Single source of truth for all content
│   └── modules/
│       ├── render.js       # Renders sections from data
│       ├── theme.js        # Light/dark theme toggle
│       ├── navigation.js   # Smooth scroll + navbar + keyboard nav
│       ├── timeline.js     # Scroll-driven timeline fill + reveals
│       └── effects.js      # Typing, scroll progress, ripple
├── assets/
│   ├── me_photo.jpg        # Profile photo
│   └── christopher_chantres_resume.pdf
└── README.md               # This file
```

## 🎨 Customization

### Content
All content lives in `js/data/portfolio.js`. Update the `experience`,
`competitions`, and `projects` arrays to change what appears on each timeline.
Each item supports `current`, `featured`, `award`, `link`, and a `logo`
(initials placeholder). To use a real brand logo, add `logoSrc: 'assets/logos/uber.svg'`
to an item and the renderer will use the image instead of the initials.

### Colors
Modify the CSS variables in `css/tokens.css` to change the color scheme:

```css
[data-theme='dark'] {
    --accent-primary: #2dd4bf;   /* teal */
    --accent-secondary: #22d3ee; /* cyan */
    --bg-primary: #070b10;       /* near-black background */
    --text-primary: #e6f1ee;     /* primary text */
}
```

### Images
Replace `assets/me_photo.jpg` with your own profile photo (recommended size: 300x300px).

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Performance

- **Optimized Images**: Compressed profile photo
- **Minimal Dependencies**: Only essential external resources
- **Efficient CSS**: Optimized selectors and properties
- **Smooth Animations**: Hardware-accelerated transitions

## 🔧 Development

To modify or extend the portfolio:

1. **Content**: Update the data arrays in `js/data/portfolio.js`
2. **Styling**: Edit the relevant file in `css/` (tokens for colors)
3. **Functionality**: Add or adjust a module in `js/modules/`
4. **Testing**: Serve over HTTP and test across devices and browsers

## 📄 License

This portfolio template is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. Contributions and improvements are welcome!

## 📞 Contact

- **Email**: tool.chantres@gmail.com
- **LinkedIn**: [Christopher Chantres](https://www.linkedin.com/in/christopher-chantres)
- **GitHub**: [ChristopherChantres](https://github.com/ChristopherChantres)

---

Built with ❤️ using modern web technologies
