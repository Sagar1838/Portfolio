export interface NavLink {
  label: string;
  href: string;
}

export interface SkillCategory {
  name: string;
  countLabel: string;
  tags: string[];
}

export interface ExperienceRole {
  id: string;
  company: string;
  title: string;
  period: string;
  bullets: string[];
  /** Public path, e.g. `/images/experience/gtcsys-frontend.png` */
  imageSrc?: string;
  imageAlt?: string;
  imagePlaceholderLabel: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  /** Public path, e.g. `/images/projects/project-management-saas.jpg` */
  imageSrc?: string;
  imageAlt?: string;
  imagePlaceholderLabel: string;
  reversed: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
