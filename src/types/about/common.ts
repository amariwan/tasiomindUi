import type { ReactNode } from "react";

export interface ISectionToggle {
  display: boolean;
  title: string | ReactNode;
}

export interface ITableOfContent {
  display: boolean;
  subItems: boolean;
}
