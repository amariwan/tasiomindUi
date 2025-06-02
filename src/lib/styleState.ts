import type { StyleOptions } from "@/types";

export let styleConfig: StyleOptions = {
  theme: "light", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "slate", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "rounded", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100",
};

export function setStyle(options: Partial<StyleOptions>) {
  styleConfig = {
    ...styleConfig,
    ...options,
  };
}
