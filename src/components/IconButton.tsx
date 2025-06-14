"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import React, { forwardRef, useEffect, useState } from "react";

import { ElementType } from "./ElementType";
import buttonStyles from "./styles/Button.module.scss";
import iconStyles from "./styles/IconButton.module.scss";
import toggleButtonStyles from "./styles/ToggleButton.module.scss";

import { Flex, Icon, Tooltip } from ".";

interface CommonProps {
  icon?: string;
  id?: string;
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
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "ghost";
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  children?: ReactNode;
  selected?: boolean;
}

export type IconButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps | AnchorProps>(
  (
    {
      icon = "refresh",
      size = "m",
      id,
      radius,
      tooltip,
      tooltipPosition = "top",
      variant = "primary",
      href,
      children,
      className,
      style,
      selected,
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

    const content = (
      <>
        {children ? children : <Icon name={icon} size="s" />}
        {tooltip && isTooltipVisible && (
          <Flex position="absolute" zIndex={1} className={iconStyles[tooltipPosition]}>
            <Tooltip label={tooltip} />
          </Flex>
        )}
      </>
    );

    const radiusSize = size === "s" || size === "m" ? "m" : "l";

    return (
      <ElementType
        id={id}
        href={href}
        ref={ref}
        className={classNames(
          buttonStyles.button,
          buttonStyles[variant],
          toggleButtonStyles.button,
          toggleButtonStyles[variant],
          selected && toggleButtonStyles.selected,
          iconStyles[size],
          className,
          radius === "none"
            ? "radius-none"
            : radius
              ? `radius-${radiusSize}-${radius}`
              : `radius-${radiusSize}`,
          "text-decoration-none",
          "button",
          "cursor-interactive",

          className,
        )}
        style={style}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-label={tooltip || icon}
        {...props}
      >
        <Flex fill center>
          {content}
        </Flex>
      </ElementType>
    );
  },
);

IconButton.displayName = "IconButton";
export { IconButton };
