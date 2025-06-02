import type { Opacity } from "./color";
import type { SpacingToken } from "./spacing";

export interface GradientProps {
  display: boolean;
  x: number;
  y: number;
  width: string | number;
  height: string | number;
  tilt: number;
  colorStart: string;
  colorEnd: string;
  opacity: Opacity;
}

export interface Effects {
  mask: {
    cursor: boolean;
    x: number;
    y: number;
    radius: number;
  };
  gradient: GradientProps;
  dots: {
    display: boolean;
    size: SpacingToken;
    color: string;
    opacity: Opacity;
  };
  lines: {
    display: boolean;
    color: string;
    opacity: Opacity;
  };
  grid: {
    display: boolean;
    color: string;
    opacity: Opacity;
  };
}
