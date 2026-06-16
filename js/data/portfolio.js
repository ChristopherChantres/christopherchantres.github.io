/**
 * Single source of truth for all portfolio content.
 * Keep this file in sync with the resume; the UI is rendered entirely from here.
 *
 * Logos: set `logoSrc` to an image in `assets/logos/`. If omitted, the circular
 * `logo` initials placeholder is used instead.
 */

export const personal = {
  name: 'Christopher Chantres',
  title: 'Data Science Student & Software Engineer',
  description:
    "Passionate about data science, software engineering, leadership, and competitive programming. Currently pursuing a Bachelor's in Data Science at UDLAP with a 3.9 GPA.",
  photo: 'assets/me_photo.jpg',
  resume: 'assets/christopher_chantres_resume.pdf',
};

export const contact = {
  email: 'tool.chantres@gmail.com',
  linkedin: 'https://www.linkedin.com/in/christopher-chantres',
  github: 'https://github.com/ChristopherChantres',
};

export const skills = {
  languages: ['Python', 'JavaScript/TypeScript', 'C++'],
  technologies: ['Google Cloud Run', 'Docker', 'Git', 'GitHub', 'Linux', 'PostgreSQL', 'Web', 'Vibe Coder Cleaner :)', 'Arduino UNO', 'Figma'],
  frameworks: ['FastAPI', 'React.js', 'Vite.js', 'Next.js'],
};

/**
 * Each timeline item supports:
 *  title, org, category, date, tech[]
 *  highlights[]    -> bullet points (add/remove a line to change the bullets)
 *  logo            -> initials shown when no image is provided
 *  logoSrc         -> image path, e.g. 'assets/logos/uber.png' (overrides initials)
 *  logoColor       -> optional background color for the initials circle
 *  current         -> shows the "Current" pill
 *  featured        -> highlights the card with a glowing accent border
 *  award           -> amber pill text (e.g. "2nd Place — Best Solution")
 *  link            -> optional external URL (renders a "View Project" link)
 */

export const experience = [
  {
    title: 'Analytics Applications Assistant',
    org: 'Vista Grande',
    category: 'Internship',
    date: 'Jun 2026 — Aug 2026',
    logo: 'VG',
    logoSrc: 'assets/logos/vista_grande.png',
    current: true,
    highlights: [
      'Developed CI/CD workflows through GitHub Actions and Cloud Run, accelerating integration by approximately 25%.',
      'Built a Python FastMCP server with sandboxed Git/filesystem access for safe AI codebase exploration.',
    ],
    tech: ['Python', 'GitHub Actions', 'Cloud Run', 'CI/CD', 'FastMCP'],
  },
  {
    title: 'Campus Leader',
    org: 'June 2026 - Present',
    category: 'Leadership',
    date: 'Present',
    logo: 'R',
    logoSrc: 'assets/logos/replit.png',
    current: true,
    highlights: [
      'Accepted in the program (more to come soon)',
    ],
    tech: ['Community', 'Developer Advocacy', 'Leadership'],
  },
  {
    title: 'Software Engineer (Part-Time)',
    org: 'Universidad de las Américas Puebla',
    category: 'Work Experience',
    date: 'Aug 2025 — Feb 2026',
    logo: 'UD',
    logoSrc: 'assets/logos/udlap.png',
    highlights: [
      'Engineered a shared FastAPI backend serving business logic for separate iOS, Android, and Web clients.',
      'Architected a robust, type-safe QR access control microservice from user personas and requirements.',
      'Built a repository layer with full CRUD, pagination, and filter-based search (location, date range, IDs).',
    ],
    tech: ['FastAPI', 'Python', 'iOS', 'Android', 'Microservices', 'PostgreSQL'],
  },
  {
    title: 'STEM Ambassador',
    org: 'Universidad de las Américas Puebla',
    category: 'Leadership',
    date: 'Jul 2025 — Present',
    logo: 'UD',
    logoSrc: 'assets/logos/udlap.png',
    current: true,
    highlights: [
      "Mentored 85+ high school students during UDLAP's STEM Summer Week \u201CInternship Preparation\u201D workshops.",
      "Served as speaker, competitor, and team leader for UDLAP's official STEM representative team.",
    ],
    tech: ['Mentorship', 'Public Speaking', 'Leadership', 'STEM Education'],
  },
  {
    title: 'Co-Founder & President',
    org: 'Bitwise Competitive Programming Club',
    category: 'Leadership',
    date: 'Feb 2025 — Present',
    logo: 'B',
    logoSrc: 'assets/logos/bitwise.png',
    current: true,
    link: 'https://www.linkedin.com/company/bitwise-competitive-programming-club/',
    highlights: [
      'Co-founded the Bitwise Competitive Programming Club at UDLAP.',
      'Lead weekly workshops on algorithms and data structures for over 30 students.',
      'Run career-growth sessions alongside competitive programming training.',
    ],
    tech: ['Leadership', 'Competitive Programming', 'Teaching', 'Event Organization'],
  },
  {
    title: 'Software Engineer Fellow',
    org: 'Uber',
    category: 'Fellowship',
    date: 'Dec 2024 — Aug 2025',
    logo: 'U',
    logoSrc: 'assets/logos/uber.png',
    highlights: [
      'Accepted from the top 3% of a global applicant pool into the Uber Career Prep (UCP) 2025 Undergraduate Cohort.',
      'Analyzed and solved problems through advanced data structures and algorithms.',
      'Engaged in workshops and mentorships to strengthen technical skills and interview readiness.',
    ],
    tech: ['Data Structures', 'Algorithms', 'Problem Solving'],
  },
];

export const competitions = [
  {
    title: 'ICPC Mexican Finals 2025',
    org: 'International Collegiate Programming Contest',
    category: 'Competition',
    date: 'November 2025',
    logo: 'IC',
    logoSrc: 'assets/logos/icpc.png',
    highlights: [
      'Qualified for the ICPC Mexican Finals for the second consecutive year.',
      'Solved complex algorithmic problems and optimized solutions in C++ under strict time constraints.',
    ],
    tech: ['C++', 'Competitive Programming', 'Problem Solving'],
  },
  {
    title: 'National iOS Dev Lab Hackathon',
    org: 'Apple & Enactus Mexico',
    category: 'Hackathon',
    date: 'May 2025',
    logo: 'A',
    logoSrc: 'assets/logos/apple.jpg',
    featured: true,
    award: '2nd Place — Best Solution',
    link: 'https://github.com/marthaheredia48/BankPath/tree/main',
    highlights: [
      'Secured 2nd place in the \u201CBest Solution\u201D category by gamifying business bank account creation.',
      'Engineered an MVP in Swift for BBVA that automated SME legal registration, serving 3.2 million businesses.',
      'Directed UI/UX design in Figma (wireframes & aesthetics) and crafted the project pitch.',
    ],
    tech: ['Swift', 'iOS Development', 'Figma', 'UI/UX Design'],
  },
  {
    title: 'ICPC Mexican Finals 2024',
    org: 'International Collegiate Programming Contest',
    category: 'Competition',
    date: 'November 2024',
    logo: 'IC',
    logoSrc: 'assets/logos/icpc.png',
    award: 'Honorable Mention',
    highlights: [
      'Qualified for the ICPC Mexican Finals on the first attempt.',
      'Ranked 63rd out of 120 teams.',
      'Obtained an Honorable Mention for commitment and team support throughout the competition.',
    ],
    tech: ['C++', 'Competitive Programming', 'Problem Solving'],
  },
];

export const projects = [
  {
    title: 'Atomic-Vec',
    org: 'Personal Project',
    category: 'Project — Database Systems',
    date: 'January 2026',
    logo: 'AV',
    logoSrc: 'assets/logos/github.png',
    link: 'https://github.com/ChristopherChantres/atomic-vec',
    highlights: [
      'Engineered a thread-safe, snapshot-isolated vector database engine from scratch in C++20 using MVCC.',
      'Architected a Transaction Manager with a logical clock, lock-free reads, and consistent data snapshots.',
      'Implemented automated write conflict detection and strict visibility rules with transaction rollbacks.',
    ],
    tech: ['C++20', 'MVCC', 'Concurrency', 'Database Systems', 'Transaction Management'],
  },
  {
    title: 'Server Capacity Forecaster',
    org: 'Personal Project',
    category: 'Project — Machine Learning',
    date: 'January 2026',
    logo: 'SC',
    logoSrc: 'assets/logos/github.png',
    featured: true,
    link: 'https://github.com/ChristopherChantres/server-capacity-forecaster',
    highlights: [
      'Implemented Linear Regression based on Ordinary Least Squares (OLS) from scratch using NumPy.',
      'Designed a Dockerized full-stack interactive app that predicts server CPU usage from simulated user traffic.',
    ],
    tech: ['Python', 'NumPy', 'Linear Regression', 'OLS', 'Docker', 'Full-Stack'],
  },
  {
    title: 'Sargassum Classifier AI Model',
    org: 'MEIA UNAM 2025',
    category: 'Project — Computer Vision & Deep Learning',
    date: 'June 2025',
    logo: 'SG',
    logoSrc: 'assets/logos/unam.png',
    award: '4th Place — MEIA UNAM 2025',
    link: 'https://github.com/ChristopherChantres/sargassum-prediction-project',
    highlights: [
      'Built a multi-class image classifier using PyTorch and a Swin Transformer to predict Sargassum levels in Mexican Caribbean beaches.',
      'Applied class imbalance handling, data augmentation, and early stopping with LR scheduling.',
      'Built a transfer-learning pipeline with precision, recall, and F1 evaluation.',
    ],
    tech: ['PyTorch', 'Computer Vision', 'Deep Learning', 'Swin Transformer'],
  },
  {
    title: 'SmartDuino',
    org: 'Personal Project',
    category: 'Project — IoT & Education',
    date: '2023',
    logo: 'SD',
    logoSrc: 'assets/logos/github.png',
    award: '2023 Computer Engineering Award',
    link: 'https://github.com/ChristopherChantres/SmartDuino',
    highlights: [
      'Built a wireless LED controller system using Arduino UNO and Firmata2.',
      'Let students create and manage multiple light shows interactively.',
      'Deployed across schools in the York Catholic District School Board.',
    ],
    tech: ['Django', 'Python', 'Arduino', 'IoT'],
  },
];

export const portfolio = {
  personal,
  contact,
  skills,
  experience,
  competitions,
  projects,
};

export default portfolio;
