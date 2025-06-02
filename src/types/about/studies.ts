import type { ReactNode } from "react";

export interface IStudyInstitution {
  name: string;
  description: ReactNode;
}

export interface IStudiesSection {
  display: boolean;
  title: string;
  institutions: IStudyInstitution[];
}
