import type { IconType } from "react-icons";

import { Schemes, TShirtSizes } from "./";

export type ShadowSize = TShirtSizes;

export type opacity = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type gridColumns =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type flex =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export interface StyleOptions {
  // „dark“ oder „light“
  theme: "dark" | "light";

  // „sand“, „gray“ oder „slate“
  neutral: "sand" | "gray" | "slate";

  // Eine Farbe aus dem Schemes-Set
  brand: Schemes;

  // Eine Farbe aus dem Schemes-Set
  accent: Schemes;

  // „color“ oder „contrast“
  solid: "color" | "contrast";

  // „flat“ oder „plastic“
  solidStyle: "flat" | "plastic";

  // „rounded“, „playful“ oder „conservative“
  border: "rounded" | "playful" | "conservative";

  // „filled“ oder „translucent“
  surface: "filled" | "translucent";

  // „all“, „micro“ oder „macro“
  transition: "all" | "micro" | "macro";

  // „90“, „95“, „100“, „105“ oder „110“
  scaling: "90" | "95" | "100" | "105" | "110";
}

export type TasiomindUIOptions = {
  style?: StyleOptions;
  icons?: Partial<Record<string, IconType>>;
};
