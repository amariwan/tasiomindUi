import type { IImage } from "@/types/shared/image";

export interface IWorkExperience {
  company: string;
  location?: string;
  link: string;
  logo: string;
  timeframe: string;
  role: string;
  techStack: string[];
  achievements: string[];
  images: IImage[];
}

export interface IWorkSection {
  display: boolean;
  title: string;
  experiences: IWorkExperience[];
}
