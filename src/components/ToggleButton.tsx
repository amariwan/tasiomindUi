"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useState } from "react";

import { ElementType } from "./ElementType";
import buttonStyles from "./styles/Button.module.scss";
import iconStyles from "./styles/IconButton.module.scss";
import styles from "./styles/ToggleButton.module.scss";

import { Flex, Icon, Tooltip } from ".";

interface CommonProps {
  label?: ReactNode;
  selected: boolean;
  variant?: "ghost" | "outline";
  size?: "s" | "m" | "l";
  radius?:
    | "none"
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-left";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  fillWidth?: boolean;
  weight?: "default" | "strong";
  truncate?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  href?: string;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

export type ToggleButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ToggleButton = forwardRef<HTMLElement, ToggleButtonProps>(
  (
    {
      label,
      selected,
      variant = "ghost",
      size = "m",
      radius,
      justifyContent = "center",
      fillWidth = false,
      tooltip,
      tooltipPosition = "top",
      weight = "default",
      truncate = false,
      prefixIcon,
      suffixIcon,
      className,
      style,
      children,
      href,
      ...props
    },
    ref,
  ) => {
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
      <ElementType
        ref={ref}
        href={href}
        className={classNames(
          buttonStyles.button,
          buttonStyles[variant],
          styles.button,
          styles[variant],
          styles[size],
          selected && styles.selected,
          radius === "none"
            ? "radius-none"
            : radius
              ? `radius-${size}-${radius}`
              : `radius-${size}`,
          "text-decoration-none",
          "button",
          "cursor-interactive",
          {
            ["fill-width"]: fillWidth,
            ["fit-width"]: !fillWidth,
            ["justify-" + justifyContent]: justifyContent,
          },
          className,
        )}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={style}
        {...props}
      >
        {prefixIcon && <Icon name={prefixIcon} size={size === "l" ? "m" : "s"} />}
        {tooltip && isTooltipVisible && (
          <Flex
            background="surface"
            className={classNames(
              radius === "none"
                ? "radius-none"
                : radius
                  ? `radius-${size}-${radius}`
                  : `radius-${size}`,
              className,
              iconStyles[tooltipPosition],
            )}
            position="absolute"
            zIndex={2}
            marginY="16"
          >
            <Tooltip label={tooltip} />
          </Flex>
        )}
        {(label || children) && (
          <Flex
            padding={size === "s" ? "2" : "4"}
            textWeight={weight}
            textSize={size === "l" ? "m" : "s"}
            className="font-label"
            role="button"
          >
            {label || children}
          </Flex>
        )}
        {suffixIcon && <Icon name={suffixIcon} size={size === "l" ? "m" : "s"} />}
      </ElementType>
    );
  },
);

ToggleButton.displayName = "ToggleButton";
export { ToggleButton };
