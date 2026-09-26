import type { ExperienceRole } from "@/types";

export const experience: ExperienceRole[] = [
  {
    id: "gtcsys-frontend",
    company: "GTCSYS Technology Partners",
    title: "ReactJS Developer / Frontend Developer",
    period: "Jan 2025 — Present",
    figureLabel: "FIG. 1 — DEVELOPER WORKSPACE",
    imageSrc: "/images/experience/workspace-developer.png",
    imageAlt: "Developer desk with triple monitors, code IDE, keyboard, and warm lamp",
    imagePlaceholderLabel: "Developer Workspace",
    bullets: [
      "Deliver production features across ReactJS, TypeScript, Next.js, and Vue.js applications, supporting multiple business workflows.",
      "Turn Figma designs and product requirements into responsive, reusable components that keep interfaces consistent and maintainable.",
      "Connect frontend workflows to REST APIs, implementing authentication, protected routes, token refresh, caching, and robust error handling.",
      "Build role-based workflows, validations, data tables, and interactive dashboards that support project, timesheet, resource, and reporting operations.",
      "Resolve UI and API defects, optimize frontend performance, and carry out regression and release validation across Local, Stage, and Production environments.",
    ],
  },
  {
    id: "gtcsys-intern",
    company: "GTCSYS Technology Partners",
    title: "ReactJS Intern",
    period: "May 2024 — Dec 2024",
    figureLabel: "FIG. 2 — FREELANCE WORKSPACE",
    imageSrc: "/images/experience/workspace-intern.png",
    imageAlt: "Coding desk with monitors, notebook, coffee mug, and headphones",
    imagePlaceholderLabel: "Freelance Workspace",
    bullets: [
      "Contributed ReactJS UI components and responsive layouts, translating design requirements into user-facing features.",
      "Supported API integration, debugging, and functional testing, helping resolve interface issues and improve usability.",
    ],
  },
];
