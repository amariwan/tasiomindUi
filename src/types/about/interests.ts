import type { ISectionToggle } from "./common";
import type { ReactNode } from "react";

export interface IInterestsSection extends ISectionToggle {
  title: string;
  description: ReactNode;
}
