import type { JSX } from "react";

export interface ISocial {
  name: string;
  icon: string;
  link: string;
  iconSize?: number;
  iconColor?: string;
  iconClassName?: string;
  iconStyle?: JSX.IntrinsicElements["svg"];
}
