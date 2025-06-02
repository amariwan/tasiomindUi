"use client";

import classNames from "classnames";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import type { SpacingToken, TextVariant } from "@/types";

import type { CommonProps, SpacingProps, StyleProps, TextProps } from "../interfaces";

type TypeProps<T extends ElementType> = TextProps<T> &
  CommonProps &
  SpacingProps &
  StyleProps &
  ComponentPropsWithoutRef<T>;

const Text = <T extends ElementType = "span">({
  as,
  variant,
  size,
  weight,
  onBackground,
  onSolid,
  align,
  wrap,
  shadow,
  shadowColor,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  paddingX,
  paddingY,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  marginX,
  marginY,
  textVariant,
  textSize,
  textType,
  textWeight,
  background,
  solid,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderStyle,
  borderWidth,
  radius,
  topRadius,
  rightRadius,
  bottomRadius,
  leftRadius,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  cursor,
  children,
  className,
  style,
  ...props
}: TypeProps<T>) => {
  const Component = as || "span";

  if (variant && (size || weight || textSize || textWeight)) {
    console.warn(
      "When 'variant' is set, 'size', 'weight', 'textSize', and 'textWeight' are ignored.",
    );
  }

  if (onBackground && onSolid) {
    console.warn("Only one of 'onBackground' or 'onSolid' can be applied.");
  }

  // Generate variant classes
  const getVariantClasses = (variant: TextVariant): string[] => {
    const [fontType, weight, size] = variant.split("-");
    return [`font-${fontType}`, `font-${weight}`, `text-${size}`];
  };

  // Generate spacing classes
  const generateSpacingClass = (prefix: string, token?: SpacingToken): string | undefined =>
    token ? `${prefix}-${token}` : undefined;

  // Generate radius classes
  const generateRadiusClass = (prefix: string, radius?: string): string | undefined =>
    radius ? `${prefix}-${radius}` : undefined;
  const classes = classNames(
    // Typography classes
    variant
      ? getVariantClasses(variant)
      : [
          textSize ? `text-${textSize}` : size ? `text-${size}` : "",
          textWeight ? `font-${textWeight}` : weight ? `font-${weight}` : "",
          textType ? `font-${textType}` : "",
        ],

    // Color classes
    onBackground ? `${onBackground.split("-")[0]}-on-background-${onBackground.split("-")[1]}` : "",
    onSolid ? `${onSolid.split("-")[0]}-on-solid-${onSolid.split("-")[1]}` : "",
    background ? `bg-${background}` : "",
    solid ? `bg-${solid}` : "",

    // Border classes
    border ? `border-${border}` : "",
    borderTop ? `border-t-${borderTop}` : "",
    borderRight ? `border-r-${borderRight}` : "",
    borderBottom ? `border-b-${borderBottom}` : "",
    borderLeft ? `border-l-${borderLeft}` : "",
    borderStyle ? `border-${borderStyle}` : "",
    borderWidth ? `border-${borderWidth}` : "",

    // Radius classes
    generateRadiusClass("rounded", radius),
    generateRadiusClass("rounded-t", topRadius),
    generateRadiusClass("rounded-r", rightRadius),
    generateRadiusClass("rounded-b", bottomRadius),
    generateRadiusClass("rounded-l", leftRadius),
    generateRadiusClass("rounded-tl", topLeftRadius),
    generateRadiusClass("rounded-tr", topRightRadius),
    generateRadiusClass("rounded-bl", bottomLeftRadius),
    generateRadiusClass("rounded-br", bottomRightRadius),

    // Shadow classes
    shadow ? `shadow-${shadow}` : "",

    // Cursor
    cursor ? `cursor-${cursor}` : "",

    // Spacing classes
    generateSpacingClass("p", padding),
    generateSpacingClass("pl", paddingLeft),
    generateSpacingClass("pr", paddingRight),
    generateSpacingClass("pt", paddingTop),
    generateSpacingClass("pb", paddingBottom),
    generateSpacingClass("px", paddingX),
    generateSpacingClass("py", paddingY),
    generateSpacingClass("m", margin),
    generateSpacingClass("ml", marginLeft),
    generateSpacingClass("mr", marginRight),
    generateSpacingClass("mt", marginTop),
    generateSpacingClass("mb", marginBottom),
    generateSpacingClass("mx", marginX),
    generateSpacingClass("my", marginY),

    // Custom classes
    className,
  );

  return (
    <Component
      className={classes}
      style={{
        textAlign: align,
        textWrap: wrap,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

Text.displayName = "Text";

export { Text };
