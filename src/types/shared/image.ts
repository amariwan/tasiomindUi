export interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  aspectRatio?: string;
  sizes?: string;
  className?: string;
  fillWidth?: boolean;
}
