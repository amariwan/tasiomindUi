import type { IImage } from "@/types/shared/image";
import type { ReactNode } from "react";

interface BaseMetadata {
  id: number;
  title: string;
  description?: ReactNode;
  url?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface LocalizedContent {
  language: string;
  title: string;
  description?: ReactNode;
}

interface UsageHistory {
  yearsOfExperience: number;
  lastUsed?: string;
}

interface SkillMetadata {
  proficiency: number;
  projects?: IProject[];
  certifications?: ICertification[];
  tools?: string[];
  images?: IImage[];
}

export interface ISkill extends UsageHistory, SkillMetadata, BaseMetadata {
  localizedContent?: LocalizedContent[];
  programmingLanguages?: IProgrammingLanguage[];
  achievements?: string[];
}

export interface IProgrammingLanguage extends UsageHistory, SkillMetadata, BaseMetadata {
  name: string;
  proficiencyLevel: ProficiencyLevel;
  localizedContent?: LocalizedContent[];
}

export enum ProficiencyLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Expert = "Expert",
}

export interface ITechnicalSection {
  display: boolean;
  title: string;
  localizedContent?: LocalizedContent[];
  skills: ISkill[];
}

export interface ICertification extends BaseMetadata {
  issuer: string;
  dateIssued: string;
  verification?: string;
  localizedContent?: LocalizedContent[];
}

export interface IProject extends BaseMetadata {
  summary?: string;
  images?: IImage[];
  tags?: string[];
  isFeatured?: boolean;
  dateCompleted?: string;
  teamMembers?: string[];
  github?: string;
  videoUrl?: string;
  clientFeedback?: string;
  technologies?: string[];
  metrics?: string[];
  caseStudy?: ReactNode;
  localizedContent?: LocalizedContent[];
}
