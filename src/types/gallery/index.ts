import type { IPage } from "@/types/shared/page";

export type ImageOrientation = "horizontal" | "vertical";

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: ImageOrientation;
  location?: string;
  technical?: string;
  date?: string;
  description?: string;
}

export interface IGalleryPage extends IPage {
  images: GalleryImage[];
}
