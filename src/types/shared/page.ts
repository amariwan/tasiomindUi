import type { ReactNode } from "react";

export interface IPage {
  label: string;
  title: string;
  path: string;
  description: string;
}

export interface IHomePage extends IPage {
  headline: string;
  subline: ReactNode;
}

export interface INewsletter {
  title: string | ReactNode;
  description: string | ReactNode;
  display: boolean;
}
