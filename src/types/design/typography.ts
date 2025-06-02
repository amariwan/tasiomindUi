import type { TShirtSizes } from "./spacing";

export type TextType = "body" | "heading" | "display" | "label" | "code";
export type TextWeight = "default" | "strong";
export type TextSize = TShirtSizes;

export type TextVariant = `${TextType}-${TextWeight}-${TextSize}`;
