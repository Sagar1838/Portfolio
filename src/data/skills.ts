import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Core",
    countLabel: "8 technologies",
    tags: [
      "ReactJS",
      "Next.js",
      "Vue.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    name: "State & Data",
    countLabel: "7 technologies",
    tags: [
      "Redux",
      "Redux Thunk",
      "Vuex",
      "TanStack Query",
      "REST APIs",
      "Axios",
      "Socket.IO",
    ],
  },
  {
    name: "UI & Forms",
    countLabel: "4 technologies",
    tags: ["Tailwind CSS", "PrimeReact", "React Hook Form", "Formik"],
  },
  {
    name: "Tools & Services",
    countLabel: "6 tools",
    tags: ["GitHub", "Postman", "Webpack", "Vite", "Firebase", "Figma"],
  },
];
