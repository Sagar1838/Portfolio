import { education } from "@/data/education";
import { site } from "@/data/site";

export const resume = {
  headline: "RESUME",
  subcopy: "Education credentials and a downloadable overview of my experience.",
  education,
  downloadHref: site.resumeHref,
  downloadLabel: site.resumeLabel,
} as const;
