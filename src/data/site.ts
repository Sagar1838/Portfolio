import type { NavLink, SiteStat, SocialLink } from "@/types";

export const site = {
  name: "Sagar Prajapati",
  monogram: "S.P",
  role: "Frontend Developer",
  roleLine: "FRONTEND DEVELOPER",
  tagline:
    "Frontend Developer with experience building and maintaining production web applications using ReactJS, TypeScript, and Next.js.",
  location: "Ahmedabad, Gujarat, India",
  email: "sagar.prajapati838@gmail.com",
  phone: "+91 97246 61838",
  phoneRaw: "919724661838",
  summary:
    "Frontend Developer with 2 years of experience building and maintaining production web applications at GTCSYS. Skilled in developing responsive, scalable interfaces using ReactJS, TypeScript, and JavaScript, with additional experience in Next.js and Vue.js. Experienced in REST API integration, reusable component development, role-based workflows, and interactive dashboards. Focused on frontend performance, debugging, and reliable releases across development, staging, and production.",
  resumeHref: "/resume/sagar-prajapati-resume.png",
  resumeLabel: "View Resume",
  portraitSrc: "/images/about-portrait.jpg",
  portraitAlt: "Portrait of Sagar Prajapati",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export const aboutStats: SiteStat[] = [
  { value: "2", label: "Years Experience" },
  { value: "6", label: "Featured Projects" },
  { value: "1", label: "Company" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sagar-prajapati-400161193",
  },
  {
    label: "Email",
    href: "mailto:sagar.prajapati838@gmail.com",
  },
];
