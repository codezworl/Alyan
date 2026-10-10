import type { Project, Certification, Skill, Service } from '../types';

export const projects: Project[] = [
  {
    id: "pak-hotel",
    title: "Pak Hotel – Hotel Management UI",
    description: "A highly responsive and modern hotel management user interface. Built with Vite, React, and Tailwind CSS, this project mirrors the premium design architecture of modern web applications, offering seamless booking interfaces, room displays, and administrative dashboards.",
    techTags: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    liveLink: "https://pak-hotel-85fdbb.netlify.app/",
    githubLink: "https://github.com/codezworl/ui_of_hotel_management"
  },
  {
    id: "unitystack",
    title: "UnityStack – MERN Stack Student Platform",
    description: "My final year university project (FYP). UnityStack is an advanced alternative to Stack Overflow, specifically designed to bridge the gap between junior developers/students and senior developers. It features a robust Q&A forum, live mentorship sessions, and project collaboration spaces.",
    techTags: ["React", "Node.js", "MongoDB", "Express", "WebRTC", "Socket.io"],
    githubLink: "https://github.com/codezworl/UnityStack2.0"
  },
  {
    id: "travel-buddy",
    title: "Travel Buddy – Tourism Guide Website",
    description: "A comprehensive tourism platform that allows users to find travel buddies, book hotels, and hire local tour guides for their journeys. Features a dynamic backend for managing bookings and user profiles.",
    techTags: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    githubLink: "https://github.com/codezworl/tourism-guide-website"
  },
  {
    id: "restaurant-ui",
    title: "Restaurant UI",
    description: "A premium, responsive frontend interface for a restaurant application. Utilizing the same modern stack as Pak Hotel, it features smooth scrolling, elegant food menus, reservation forms, and a high-end visual aesthetic.",
    techTags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
    githubLink: "https://github.com/codezworl/restraunt-ui/tree/main/final-project"
  },
  {
    id: "spamshield",
    title: "SpamShield – AI Spam Detection",
    description: "An intelligent AI-powered application that detects email spam by analyzing suspicious links and specific keywords. Built with a React frontend and a Python backend to process and classify text data accurately.",
    techTags: ["React", "Python", "AI/ML", "Natural Language Processing"],
    liveLink: "https://spamshield-wr6k.vercel.app/",
    githubLink: "https://github.com/codezworl/spamshield"
  },
  {
    id: "sortmaster",
    title: "Sort Master Tech – Algorithm Visualizer",
    description: "An interactive educational tool that visually displays how various sorting algorithms work under the hood. Built with React and Python, it allows students to see step-by-step sorting animations in real-time.",
    techTags: ["React", "Python", "Algorithms", "Data Visualization"],
    liveLink: "https://sorter-theta.vercel.app/",
    githubLink: "https://github.com/codezworl/Sorter"
  },
  {
    id: "shadow-runner",
    title: "Shadow Runner – Platformer Game",
    description: "A fast-paced web-based platformer game utilizing HTML5 Canvas. Features collision detection, physics, and smooth character animations all built from scratch without a heavy game engine.",
    techTags: ["JavaScript", "HTML5 Canvas", "CSS", "Game Dev"],
    liveLink: "https://shadow-runner.vercel.app/",
    githubLink: "https://github.com/codezworl/ShadowRunner"
  },
  {
    id: "roman-converter",
    title: "Roman Converter",
    description: "A lightning-fast utility tool to convert standard numbers into Roman numerals and vice versa, featuring robust input validation and algorithm efficiency.",
    techTags: ["JavaScript", "CSS", "HTML", "Algorithms"],
    liveLink: "https://roman-converter-xi.vercel.app/",
    githubLink: "https://github.com/codezworl/RomanConverter"
  },
  {
    id: "number-converter",
    title: "Number Converter (Multi-Base)",
    description: "A mathematical utility for developers to instantly convert numbers between Binary, Decimal, Hexadecimal, and Octal bases with a clean interface.",
    techTags: ["JavaScript", "CSS", "HTML", "Algorithms"],
    liveLink: "https://number-converter-eight.vercel.app/",
    githubLink: "https://github.com/codezworl/NumberConverter"
  },
  {
    id: "speakify",
    title: "Speakify – Text-to-Speech App",
    description: "An accessibility-focused application that leverages modern Web APIs and Python to convert written text into natural-sounding speech in real-time.",
    techTags: ["Python", "Web APIs", "JavaScript", "HTML/CSS"],
    liveLink: "https://speakify-okjl.vercel.app/",
    githubLink: "https://github.com/codezworl/Speakify"
  },
  {
    id: "dk-recruitment",
    title: "DK Recruitment Agency",
    description: "A fully-featured recruitment agency platform in Pakistan built on the MERN stack. Connects job seekers with employers through an optimized portal with resume parsing and application tracking.",
    techTags: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://dkrecruitment.pk/"
  },
  {
    id: "loja-loja",
    title: "Loja Loja – E-commerce Platform",
    description: "A scalable e-commerce site powered by React on the frontend and PHP on the backend. Includes product catalogs, shopping cart functionality, and secure checkout processes.",
    techTags: ["React", "PHP", "E-commerce", "MySQL"],
    liveLink: "https://lojaloja.pt/"
  },
  {
    id: "hrms",
    title: "HRMS (TechScale)",
    description: "A comprehensive Human Resource Management System. It handles employee onboarding, payroll, and attendance tracking, and features a powerful AI chatbot implementation named 'Scale AI' (read-only model) to assist employees with internal queries securely.",
    techTags: ["React", "NestJS", "AI Chatbot", "Enterprise Software"],
    liveLink: "https://hrms.techscale.io/"
  },
  {
    id: "5rhythms",
    title: "5Rhythms – Dance Classes",
    description: "A specialized platform for dance studios to manage class schedules and events. Users can browse upcoming classes, book spots, and view event details through a highly interactive React interface powered by a secure NestJS and PostgreSQL backend.",
    techTags: ["React", "NestJS", "PostgreSQL", "Booking System"],
    liveLink: "https://5rhythms.example.com/"
  }
];

export const certifications: Certification[] = [
  {
    id: "cisco-js",
    name: "Cisco JavaScript Essentials 2",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/756a25d1-fc3e-4cfb-88e5-92a5e487643a"
  },
  {
    id: "cisco-cyber",
    name: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/f7bdc816-72e3-4076-803f-40a6455a0f15"
  },
  {
    id: "aws-cloud",
    name: "AWS Academy Cloud Architecting",
    issuer: "AWS Academy",
    link: "https://www.credly.com/badges/dbf462dc-ec87-4e67-9d4d-28a7e720eef0"
  },
  {
    id: "coursera-bmi",
    name: "Business Model Innovation",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/QCTSDHXTADF3"
  },
  {
    id: "coursera-ai",
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/BEEH6XDUAHDG"
  },
  {
    id: "coursera-approx",
    name: "Approximation Algorithms",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/EKHCMTD8ZEM2"
  },
  {
    id: "coursera-linux",
    name: "Linux – Processes & System Resource Management",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/XH5GX7HDY9PS"
  },
  {
    id: "fcc-responsive",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "/assets/freecodecampcertificate.pdf",
    isLocal: true
  },
  {
    id: "ms-csharp",
    name: "C# Programming",
    issuer: "Microsoft",
    link: "/assets/c# certification.pdf",
    isLocal: true
  }
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "SQL (MySQL)", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Scale AI (Read-Only Model)", category: "AI & ML" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "WebRTC", category: "Tools & Practices" },
  { name: "Socket.io", category: "Tools & Practices" },
  { name: "Git/GitHub", category: "Tools & Practices" }
];

export const services: Service[] = [
  { title: "Web Development", description: "Building responsive, performant, and modern web applications with cutting-edge tech.", icon: "monitor" },
  { title: "UI/UX Design", description: "Designing intuitive, accessible, and visually appealing user interfaces.", icon: "pen-tool" },
  { title: "Model Training", description: "Training and fine-tuning machine learning models for specific use cases.", icon: "cpu" },
  { title: "LLM Integrating", description: "Seamlessly embedding large language models into existing platforms.", icon: "database" },
  { title: "AI Bot Integration", description: "Developing and integrating intelligent AI chatbots to automate workflows.", icon: "message-square" }
];

export interface ExperienceEntry {
  title: string;
  company: string;
  dateRange: string;
  description: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Full Stack Developer",
    company: "TechScale",
    dateRange: "Aug 2025 - Present",
    description: [
      "Built and maintain the company HRMS (hrms.techscale.io) covering attendance, leave management, and employee records for 60+ employees.",
      "Implemented 'Scale AI' into the HRMS, a custom read-only chatbot model designed to securely assist employees with internal queries.",
      "Contributed to the web development and maintenance of 5Rhythms, a class booking platform utilizing React, NestJS, and PostgreSQL.",
      "Designed and documented REST APIs with role-based access control and wrote API use cases and test cases, ensuring reliable integrations.",
      "Set up a CI/CD pipeline with GitHub Actions to automatically run tests and deploy builds, reducing manual release effort."
    ]
  },
  {
    title: "Front End Engineer",
    company: "Social Swirl",
    dateRange: "Jun 2024 - Sep 2024",
    description: [
      "Converted Figma designs into responsive, cross-browser React.js components used across 10+ pages.",
      "Developed the front-end interface for the DK Recruitment agency platform, optimizing the portal for job seekers and employers.",
      "Collaborated with the team to keep the UI consistent and performant."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Codemo",
    dateRange: "Jun 2023 - Aug 2023",
    description: [
      "Built responsive front-end pages with HTML, CSS, JavaScript, and PHP."
    ]
  },
  {
    title: "Co-Ambassador & Python Trainee",
    company: "Fast Softec / Digicon Valley",
    dateRange: "Jan 2024 - Aug 2024",
    description: [
      "Co-Ambassador at Fast Softec (Jan-Aug 2024), ran tech workshops and student outreach.",
      "Python Trainee at Digicon Valley (Apr-May 2024), gaining foundational programming experience."
    ]
  }
];
