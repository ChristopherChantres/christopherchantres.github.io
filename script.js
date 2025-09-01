// Configuration object for easy updates
const PORTFOLIO_CONFIG = {
    // Personal Information
    name: 'Christopher Chantres',
    title: 'Data Science Student & Software Engineer',
    description: 'Passionate about data science, software engineering, leadership, and competitive programming. Currently pursuing a Bachelor\'s in Data Science at UDLAP with a 4.0 GPA.',
    
    // Contact Information
    contact: {
        linkedin: 'https://www.linkedin.com/in/christopher-chantres',
        github: 'https://github.com/ChristopherChantres',
    },
    
    // Social Links
    social: {
        linkedin: 'https://www.linkedin.com/in/christopher-chantres',
        github: 'https://github.com/ChristopherChantres'
    },
    
    // Project Links
    projects: {
        sargassum: 'https://github.com/ChristopherChantres/sargassum-prediction-project',
        smartduino: 'https://github.com/ChristopherChantres/SmartDuino',
        calculator: 'https://github.com/ChristopherChantres/scientific-calculator',
        bankpath: 'https://github.com/marthaheredia48/BankPath/tree/main'
    },
    
    // Technology Tags
    technologies: {
        languages: ['Python', 'JavaScript/TypeScript', 'C/C++', 'Java', 'Swift'],
        tools: ['Docker', 'Git', 'PostgreSQL', 'Linux', 'Arduino'],
        frameworks: ['FastAPI', 'Django', 'React.js', 'Next.js', 'PyTorch', 'Pandas']
    },
    
    // Experience Data
    experience: [
        {
            title: 'Software Engineer',
            company: 'Universidad de las Américas Puebla',
            duration: 'Aug 2025 - Present',
            description: 'Part-time Software Engineer developing innovative solutions and contributing to the university\'s technological advancement.',
            highlights: [
                'Developing and maintaining software solutions for university operations',
                'Collaborating with several departments and teams on technology projects',
                'Contributing to the university\'s digital transformation initiatives'
            ],
            tech: ['Software Development', 'Problem Solving', 'Team Collaboration'],
            isCurrent: true
        },
        {
            title: 'Co-Founder & Vice-President',
            company: 'Bitwise Competitive Programming Club',
            duration: 'Feb 2025 - Present',
            description: 'Leading the development of competitive programming skills among students and organizing educational workshops.',
            highlights: [
                'Co-founded the club to promote competitive programming at UDLAP',
                'Lead workshops for over 30 students on algorithms and data structures',
                'Organize programming competitions and hackathons',
                'Mentor students in problem-solving techniques and coding practices'
            ],
            tech: ['Leadership', 'Competitive Programming', 'Teaching', 'Event Organization'],
            isLeadership: true
        },
        {
            title: 'Software Engineer Fellow',
            company: 'Uber',
            duration: 'Dec 2024 - Aug 2025',
            description: 'Accepted from the top 3% of global applicants to join Uber Career Prep (UCP) 2025 Undergraduate Cohort.',
            highlights: [
                'Analyzed and solved problems through advanced data structures and algorithms',
                'Engaged in workshops and mentorships for technical skills and interview readiness'
            ],
            tech: ['Data Structures', 'Algorithms', 'Problem Solving']
        },
        {
            title: 'ICPC Mexican Finals 2024',
            company: 'International Collegiate Programming Contest',
            duration: 'Sep 2024 - Nov 2024',
            description: 'Qualified for the 2024 ICPC Mexican Finals and ranked 63rd out of 120 teams.',
            highlights: [
                'Obtained "Honorable Mention" for commitment and team support',
                'Demonstrated problem-solving skills under time constraints'
            ],
            tech: ['Competitive Programming', 'Problem Solving', 'C++']
        },
        {
            title: 'Frontend Developer',
            company: 'Maple Movers (Toronto, Canada)',
            duration: 'Oct 2023 - Dec 2023',
            description: 'Developed UI for company website using Next.js, increasing appointment bookings by 34%.',
            highlights: [
                'Managed frontend server configuration and DNS records',
                'Ensured uptime with Vercel and Cloudflare'
            ],
            tech: ['Next.js', 'React', 'JavaScript', 'Vercel']
        },
        {
            title: 'National iOS Development Lab Hackathon',
            company: 'Apple & Enactus Mexico',
            duration: 'May 2025',
            description: 'Secured 2nd place in "Best Solution" category for BBV A legal registration automation.',
            highlights: [
                'Engineered MVP serving 3.2 million businesses',
                'Directed UI/UX design in Figma'
            ],
            tech: ['Swift', 'iOS Development', 'Figma', 'UI/UX']
        }
    ],
    
    // Projects Data
    projects: [
        {
            title: 'Sargassum Classifier AI Model',
            type: 'Computer Vision & Deep Learning',
            description: 'Multi-class image classification model using PyTorch and Swin Transformer architecture to predict Sargassum seaweed levels in Mexican Caribbean beaches.',
            highlights: [
                'Achieved 4th place in MEIA UNAM 2025 competition',
                'Implemented ML techniques including class imbalance handling and data augmentation',
                'Built comprehensive deep learning pipeline with transfer learning'
            ],
            tech: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Swin Transformer'],
            link: 'https://github.com/ChristopherChantres/sargassum-prediction-project'
        },
        {
            title: 'SmartDuino',
            type: 'IoT & Educational Technology',
            description: 'Wireless LED controller system using Arduino UNO and Firmata2, allowing students to create and manage multiple light shows.',
            highlights: [
                'Deployed across schools in York Catholic District School Board',
                'Received 2023 Computer Engineering Award for innovative application',
                'Enhanced educational engagement through interactive technology'
            ],
            tech: ['Django', 'Python', 'Arduino', 'IoT'],
            link: 'https://github.com/ChristopherChantres/SmartDuino'
        },
        {
            title: 'Scientific Calculator',
            type: 'C++ Application',
            description: 'Advanced calculator for powers, slopes, quadratic equations, and 3D vector cross products with data export functionality.',
            highlights: [
                'Handles real and complex quadratic equations',
                'Calculates 3D vector cross products',
                'Exports tabulated data to .txt files'
            ],
            tech: ['C++', 'Linux', 'Mathematics', 'File I/O'],
            link: 'https://github.com/ChristopherChantres/scientific-calculator'
        },
        {
            title: 'BankPath',
            type: 'Web Application',
            description: 'Web application for banking path optimization and financial planning.',
            highlights: [
                'Built with modern web technologies',
                'Focuses on user experience and functionality',
                'Demonstrates full-stack development skills'
            ],
            tech: ['Web Development', 'Full-Stack', 'User Experience'],
            link: 'https://github.com/marthaheredia48/BankPath/tree/main'
        }
    ]
};

// Dark mode functionality
class ThemeManager {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle-btn');
        this.currentTheme = localStorage.getItem('theme') || 'dark'; // Changed default to dark
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.updateToggleButton();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateToggleButton() {
        const icon = this.themeToggleBtn.querySelector('i');
        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// Smooth scrolling for navigation links
class SmoothScroller {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe all cards and sections
        const animatedElements = document.querySelectorAll('.experience-card, .project-card, .skill-category');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Navbar scroll effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class for styling
            if (currentScrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll (optional)
            if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }

            this.lastScrollY = currentScrollY;
        });
    }
}

// Typing effect for hero title
class TypingEffect {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.originalText = this.heroTitle.textContent;
        this.init();
    }

    init() {
        if (!this.heroTitle) return;
        
        this.heroTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < this.originalText.length) {
                this.heroTitle.textContent += this.originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Card hover effects
class CardEffects {
    constructor() {
        this.init();
    }

    init() {
        const cards = document.querySelectorAll('.experience-card, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Skill tag animations
class SkillTagAnimations {
    constructor() {
        this.init();
    }

    init() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-3px) scale(1.05)';
                tag.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
            });
            
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.boxShadow = 'none';
            });
        });
    }
}

// Contact method hover effects
class ContactMethodEffects {
    constructor() {
        this.init();
    }

    init() {
        const contactMethods = document.querySelectorAll('.contact-method');
        
        contactMethods.forEach(method => {
            method.addEventListener('mouseenter', () => {
                method.style.transform = 'translateY(-5px)';
                method.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            });
            
            method.addEventListener('mouseleave', () => {
                method.style.transform = 'translateY(0)';
                method.style.boxShadow = 'none';
            });
        });
    }
}

// Parallax effect for hero section
class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        if (!this.hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            this.hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Content Manager to populate data from configuration
class ContentManager {
    constructor() {
        this.init();
    }

    init() {
        this.populateHeroSection();
        this.populateSkills();
        this.populateExperience();
        this.populateProjects();
        this.populateContact();
    }

    populateHeroSection() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroTitle) heroTitle.textContent = PORTFOLIO_CONFIG.name;
        if (heroSubtitle) heroSubtitle.textContent = PORTFOLIO_CONFIG.title;
        if (heroDescription) heroDescription.textContent = PORTFOLIO_CONFIG.description;
    }

    populateSkills() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach((category, index) => {
            const skillTags = category.querySelector('.skill-tags');
            if (skillTags) {
                skillTags.innerHTML = '';
                
                let skills = [];
                if (index === 0) skills = PORTFOLIO_CONFIG.technologies.languages;
                else if (index === 1) skills = PORTFOLIO_CONFIG.technologies.tools;
                else if (index === 2) skills = PORTFOLIO_CONFIG.technologies.frameworks;
                
                skills.forEach(skill => {
                    const tag = document.createElement('span');
                    tag.className = 'skill-tag';
                    tag.textContent = skill;
                    skillTags.appendChild(tag);
                });
            }
        });
    }

    populateExperience() {
        const experienceGrid = document.querySelector('.experience-grid');
        if (!experienceGrid) return;
        
        experienceGrid.innerHTML = '';
        
        PORTFOLIO_CONFIG.experience.forEach(exp => {
            const card = document.createElement('div');
            let cardClass = 'experience-card';
            if (exp.isCurrent) cardClass += ' current-position';
            if (exp.isLeadership) cardClass += ' leadership-position';
            
            card.className = cardClass;
            card.innerHTML = `
                <div class="experience-header">
                    <h3>${exp.title}</h3>
                    <br>
                    <span class="company">${exp.company}</span>
                    <br>
                    <span class="duration">${exp.duration}</span>
                    ${exp.isCurrent ? '<span class="current-badge">Current Position</span>' : ''}
                    ${exp.isLeadership ? '<span class="leadership-badge">Leadership Role</span>' : ''}
                </div>
                <p>${exp.description}</p>
                <ul>
                    ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                <div class="tech-stack">
                    ${exp.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            `;
            experienceGrid.appendChild(card);
        });
    }

    populateProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        PORTFOLIO_CONFIG.projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <span class="project-type">${project.type}</span>
                </div>
                <p>${project.description}</p>
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    populateContact() {
        const contactMethods = document.querySelector('.contact-methods');
        if (!contactMethods) return;
        
        contactMethods.innerHTML = `
            <div class="contact-method">
                <i class="fab fa-linkedin"></i>
                <a href="${PORTFOLIO_CONFIG.contact.linkedin}" target="_blank">LinkedIn Profile</a>
            </div>
            <div class="contact-method">
                <i class="fab fa-github"></i>
                <a href="${PORTFOLIO_CONFIG.contact.github}" target="_blank">GitHub Profile</a>
            </div>
        `;
    }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContentManager(); // Initialize content first
    new ThemeManager();
    new SmoothScroller();
    new AnimationObserver();
    new NavbarScroll();
    new TypingEffect();
    new CardEffects();
    new SkillTagAnimations();
    new ContactMethodEffects();
    new ParallaxEffect();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll progress indicator
class ScrollProgress {
    constructor() {
        this.createProgressBar();
        this.init();
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        this.progressBar = progressBar;
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            this.progressBar.style.width = scrollPercent + '%';
        });
    }
}

// Initialize scroll progress
new ScrollProgress();

// Add some additional interactive features
class InteractiveFeatures {
    constructor() {
        this.init();
    }

    init() {
        // Add click ripple effect to buttons
        this.addRippleEffect();
        
        // Add scroll-triggered animations
        this.addScrollAnimations();
        
        // Add keyboard navigation
        this.addKeyboardNavigation();
    }

    addRippleEffect() {
        const buttons = document.querySelectorAll('.btn, .theme-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    addScrollAnimations() {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Toggle theme with Ctrl+T
            if (e.ctrlKey && e.key === 't') {
                e.preventDefault();
                document.getElementById('theme-toggle-btn').click();
            }
            
            // Navigate sections with arrow keys
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                const sections = Array.from(document.querySelectorAll('section'));
                const currentSection = sections.find(section => {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
                });
                
                if (currentSection) {
                    const currentIndex = sections.indexOf(currentSection);
                    let nextIndex;
                    
                    if (e.key === 'ArrowDown') {
                        nextIndex = Math.min(currentIndex + 1, sections.length - 1);
                    } else {
                        nextIndex = Math.max(currentIndex - 1, 0);
                    }
                    
                    sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// Initialize interactive features
new InteractiveFeatures();

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .navbar.scrolled {
        background: var(--nav-bg);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);
