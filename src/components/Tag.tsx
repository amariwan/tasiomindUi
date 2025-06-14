"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import React, { forwardRef } from "react";

import styles from "./styles/Tag.module.scss";

import { Flex, Icon, Text } from ".";

interface TagProps extends React.ComponentProps<typeof Flex> {
  variant?: "brand" | "accent" | "warning" | "success" | "danger" | "neutral" | "info" | "gradient";
  size?: "s" | "m" | "l";
  label?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  children?: ReactNode;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      variant = "neutral",
      size = "m",
      label = "",
      prefixIcon,
      suffixIcon,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const paddingSize = size === "s" ? "2" : "4";

    return (
      <Flex
        fitWidth
        borderWidth={1}
        borderStyle="solid"
        vertical="center"
        radius="l"
        gap="4"
        ref={ref}
        className={classNames(styles.tag, styles[variant], styles[size], className)}
        {...rest}
        glow
      >
        {prefixIcon && <Icon name={prefixIcon} size="xs" />}
        <Flex style={{ userSelect: "none" }} paddingX={paddingSize} vertical="center">
          <Text as="span" variant="label-default-s">
            {label || children}
          </Text>
        </Flex>
        {suffixIcon && <Icon name={suffixIcon} size="xs" />}
      </Flex>
    );
  },
);

Tag.displayName = "Tag";

export { Tag };
export type { TagProps };
