export interface NavLink {
  label: string;
  href: string;
}

export interface SiteStat {
  value: string;
  label: string;
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
  figureLabel: string;
  bullets: string[];
  imagePlaceholderLabel: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  imagePlaceholderLabel: string;
  reversed: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  cgpa: string;
  summary: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
