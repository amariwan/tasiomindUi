import { setIcons, setStyle } from "@/lib";
import type { TasiomindUIOptions } from "@/types";

export const createTasiomindUI = (options: TasiomindUIOptions = {}): void => {
  const { style: styleOptions, icons: iconOptions } = options;

  if (styleOptions) {
    setStyle(styleOptions);
    if (styleOptions.theme) {
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", styleOptions.theme);
      }
    }
  }

  if (iconOptions) {
    setIcons(iconOptions);
  }
};
