"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useState } from "react";
import type { IconType } from "react-icons";

import type { ColorScheme, ColorWeight } from "@/types";

import { iconLibrary } from "./icons";
import styles from "./styles/Icon.module.scss";
import iconStyles from "./styles/IconButton.module.scss";

import { Flex, Tooltip } from ".";

interface IconProps extends React.ComponentProps<typeof Flex> {
  name: string;
  onBackground?: `${ColorScheme}-${ColorWeight}`;
  onSolid?: `${ColorScheme}-${ColorWeight}`;
  size?: "xs" | "s" | "m" | "l" | "xl";
  decorative?: boolean;
  tooltip?: ReactNode;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      name,
      onBackground,
      onSolid,
      size = "m",
      decorative = true,
      tooltip,
      tooltipPosition = "top",
      ...rest
    },
    ref,
  ) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, "");
    const iconKey = Object.keys(iconLibrary).find(
      (key) => key.toLowerCase().replace(/\s+/g, "") === normalizedName,
    );
    const IconComponent: IconType | undefined = iconKey ? iconLibrary[iconKey] : undefined;
    if (!IconComponent) {
      console.warn(`Icon "${name}" does not exist in the library.`);
      return null;
    }

    if (onBackground && onSolid) {
      console.warn(
        "You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.",
      );
    }

    let colorClass = "color-inherit";

    if (onBackground) {
      const [scheme, weight] = onBackground.split("-") as [ColorScheme, ColorWeight];
      colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
      const [scheme, weight] = onSolid.split("-") as [ColorScheme, ColorWeight];
      colorClass = `${scheme}-on-solid-${weight}`;
    }

    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isHover) {
        timer = setTimeout(() => {
          setTooltipVisible(true);
        }, 400);
      } else {
        setTooltipVisible(false);
      }

      return () => clearTimeout(timer);
    }, [isHover]);

    return (
      <Flex
        inline
        fit
        position="relative"
        as="div"
        ref={ref}
        className={classNames(colorClass, styles.icon, styles[size])}
        role={decorative ? "presentation" : undefined}
        aria-hidden={decorative ? "true" : undefined}
        aria-label={decorative ? undefined : name}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        {...rest}
      >
        <IconComponent />
        {tooltip && isTooltipVisible && (
          <Flex position="absolute" zIndex={1} className={iconStyles[tooltipPosition]}>
            <Tooltip label={tooltip} />
          </Flex>
        )}
      </Flex>
    );
  },
);

Icon.displayName = "Icon";

export { Icon };
