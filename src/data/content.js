/**
 * Content Configuration for Santhosh R's Portfolio
 * All text, links, skills, and projects are maintained in this single file.
 */

export const personalData = {
  name: "Santhosh R",
  role: "Java Full-Stack Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "santhoshravikumar10@gmail.com",
  phone: "+91 8248125995",
  github: "https://github.com/Santhosh-kido",
  linkedin: "https://www.linkedin.com/in/santhosh-r10/",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  wordmark: "SR.",
  statusText: "Open to internships & fresher roles",
};

export const heroData = {
  intro:
    "I build full-stack applications with Java, Spring Boot, React and PostgreSQL, and I've deployed one on AWS EC2 myself. I'm a final-year CSE student looking for a team where I can contribute to real problems and keep growing as a software engineer.",
  facts: [
    { label: "Degree", value: "B.E. CSE 2027" },
    { label: "Academics", value: "CGPA 8.3" },
    { label: "Work", value: "3 Projects" },
    { label: "Experience", value: "1 Internship" },
    { label: "Location", value: "Chennai, Tamil Nadu" },
  ],
};

export const aboutData = {
  summary:
    "I'm a Computer Science undergraduate with a foundation in software development and problem-solving. I started with Java and learned Spring Boot by building a working REST API, then added a React frontend and deployed the whole application on an AWS EC2 Ubuntu server. I'm also comfortable in Python, where I've built machine learning projects with Flask and Scikit-learn. I learn best by extending something I've already built, so I'm now adding security and deeper backend concepts to my main project.",
  currentlyLearning: [
    "Java 8 features: Streams and Lambda expressions",
    "Multithreading and CompletableFuture",
    "Spring Security with JWT-based authentication and role-based access",
    "PostgreSQL subqueries, views, stored procedures and functions",
  ],
};

export const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend & Frameworks",
    skills: ["Spring Boot", "Spring Data JPA"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["AWS EC2", "Security Groups", "Linux (basic commands, SSH)"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "Figma", "Maven"],
  },
  {
    category: "Concepts",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "REST APIs",
      "UI/UX",
      "Cloud Computing (IaaS, PaaS, SaaS)",
    ],
  },
];

export const projectsData = [
  {
    id: "01",
    featured: true,
    title: "Workforce Management System",
    year: "2026",
    summary: "Full-stack employee management application, deployed on AWS.",
    description:
      "Built and deployed a full-stack workforce management system with CRUD operations, RESTful APIs, live multi-field search and filtering, input validation and duplicate-email error handling. Hosted on an AWS EC2 Ubuntu server, with Security Groups controlling access.",
    detailLine: "Hosted on AWS EC2 · Ubuntu · Security Groups",
    tags: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "AWS EC2",
      "Maven",
      "Git",
      "Postman",
    ],
    // Workforce Management System repository
    github: "https://github.com/Santhosh-kido/WorkForce_Management_System",
  },
  {
    id: "02",
    featured: false,
    title: "Human Disease Prediction System",
    year: "2024",
    summary: "Predicts 41 diseases from 132 symptom indicators.",
    description:
      "A Flask-based machine learning system that predicts 41 diseases from 132 symptom indicators, trained on about 4,900 patient records. A REST API connects to a JavaScript frontend for real-time predictions. I compared three algorithms, and Random Forest gave the best accuracy at 92%.",
    tags: [
      "Python",
      "Flask",
      "Scikit-learn",
      "HTML",
      "CSS",
      "JavaScript",
      "Postman",
      "Random Forest",
      "Decision Tree",
      "Naive Bayes",
    ],
    // Human Disease Prediction System repository
    github: "https://github.com/Santhosh-kido/human-disease-prediction",
  },
  {
    id: "03",
    featured: false,
    title: "User Centric Mobile Addiction Analysis",
    year: "2026",
    summary: "Assesses smartphone addiction risk across three levels.",
    description:
      "A full-stack machine learning web app that assesses smartphone addiction risk across three levels from 20 behavioral inputs. It is trained on 5,000 survey responses and uses a 6-model ensemble to give personalized predictions and wellbeing recommendations through a REST API.",
    tags: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Linear Regression",
      "Decision Tree",
      "Random Forest",
      "Gradient Boosting",
      "Naive Bayes",
      "SVM",
    ],
    // Mobile Addiction Analysis repository
    github: "https://github.com/Santhosh-kido/Mobile-Addiction-Pdiction-System",
  },
  {
    id: "04",
    featured: false,
    inProgress: true,
    title: "Workforce Management System v2 — Security & Payroll",
    year: "In Progress",
    summary: "Security, role-based access, and automated payroll extension.",
    description:
      "Extending the Workforce Management System with JWT authentication, role-based access control (Admin, HR, Employee) and a payroll module with payslip history.",
    tags: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL"],
    github: null,
  },
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "Altruisty Innovation Pvt Ltd",
    location: "Avadi, Chennai",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Designed web application interfaces in Figma and translated the designs into responsive web pages using HTML, CSS, and JavaScript.",
      "Built reusable React components, including pop-up forms and modals with input validation, to improve user experience.",
      "Implemented responsive layouts and consistent styling across different screen sizes.",
    ],
  },
];

export const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution:
      "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    location: "Avadi, Chennai",
    period: "2023–2027",
    score: "CGPA 8.3",
  },
  {
    degree: "HSC",
    institution: "V.O.C. Vidiyalayaa Matric Higher Secondary School",
    location: "Chennai",
    period: "2021",
    score: "82%",
  },
];

export const certificationsData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Oct 2024",
  },
  {
    title: "Joy of Computing using Python",
    issuer: "NPTEL",
    date: "Apr 2024",
  },
  {
    title: "SaaS Technical Fundamentals",
    issuer: "AWS Skill Builder",
    date: null,
  },
  {
    title: "AWS Identity and Access Management (IAM) Basics",
    issuer: "AWS Skill Builder",
    date: null,
  },
];

export const contactData = {
  invitation:
    "I am actively seeking Java full-stack and backend developer roles, internships, and fresher opportunities. If you're building a team or would like to discuss my background, feel free to reach out via email, phone, or the form below.",
  email: "santhoshravikumar10@gmail.com",
  phone: "+91 8248125995",
  github: "https://github.com/Santhosh-kido",
  linkedin: "https://www.linkedin.com/in/santhosh-r10/",
  location: "Chennai, Tamil Nadu, India",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
