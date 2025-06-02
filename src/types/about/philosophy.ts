import type { ISectionToggle } from "./common";
import type { ReactNode } from "react";

export interface IPhilosophySection extends ISectionToggle {
  title: string;
  description: ReactNode;
}
