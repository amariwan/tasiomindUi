import type { ISectionToggle } from "./common";
import type { ReactNode } from "react";

export interface IIntroSection extends ISectionToggle {
  title: string;
  description: ReactNode;
}
