import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-management-saas",
    title: "Project Management SaaS Platform",
    subtitle: "Workflows · Timesheets · Resource Ops",
    description: [
      "Delivered project and task workflows across List, Kanban, Table, Calendar, and Workload views, including dependencies, filters, and custom workflows.",
      "Implemented Timesheet, Timelog Approval, Leave Management, Resource Allocation, and Resource Activity Report capabilities with permissions, calculations, and KPI dashboards.",
    ],
    tags: ["ReactJS", "TypeScript", "Dashboards", "RBAC"],
    imagePlaceholderLabel: "Project screenshot coming soon",
    reversed: false,
  },
  {
    id: "real-estate-investment",
    title: "Real Estate Investment Management Platform",
    subtitle: "CRM · Bidding · Map Discovery",
    description: [
      "Built property management, investor CRM, bidding, outreach, media publishing, scheduling, territory, and document workflows.",
      "Integrated Mapbox-based property and investor discovery with synchronized map/list views, search, filters, sorting, and pagination.",
    ],
    tags: ["ReactJS", "Mapbox", "CRM", "REST APIs"],
    imagePlaceholderLabel: "Project screenshot coming soon",
    reversed: true,
  },
  {
    id: "auto-care",
    title: "Auto Care Management Platform",
    subtitle: "Booking · Dispatch · Invoicing",
    description: [
      "Developed booking, scheduling, dispatch, customer, invoice, estimate, service, subscription, employee, and vehicle workflows.",
      "Integrated Redux, Firebase authentication, REST APIs, and Google Maps; applied code splitting and lazy loading to improve frontend delivery.",
    ],
    tags: ["ReactJS", "Redux", "Firebase", "Google Maps"],
    imagePlaceholderLabel: "Project screenshot coming soon",
    reversed: false,
  },
  {
    id: "tpm-intelligence",
    title: "TPM Intelligence & Program Management Platform",
    subtitle: "Integrations · Dashboards · Onboarding",
    description: [
      "Built onboarding, organization setup, program configuration, and integrations for Jira, Slack, GitHub, and Google Calendar.",
      "Developed authenticated dashboards and reusable components using React Hook Form, Zod, TanStack Query, Recharts, and custom Axios services/hooks.",
    ],
    tags: ["ReactJS", "TanStack Query", "Recharts", "Zod"],
    imagePlaceholderLabel: "Project screenshot coming soon",
    reversed: true,
  },
];
