"use client";

import type { StyleProps } from "@/interfaces";
import { CSSProperties } from "react";
import { Flex, Text } from ".";

interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  style?: CSSProperties;
  BackgroundColor?: StyleProps["background"];
  barColor?: StyleProps["background"];
  height?: number;
  glow?: boolean;
}

export function Progress({
  value,
  max = 100,
  label,
  showPercentage = true,
  style = {},
  barColor = "brand-strong",
  BackgroundColor = "neutral-strong",
  height = 8,
  glow = true,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <Flex direction="column" fillWidth gap="1" style={style}>
      {label && (
        <Text align="start" onBackground="brand-weak" size="s">
          {label}
        </Text>
      )}

      <Flex
        background={BackgroundColor}
        fillWidth
        style={{
          width: "100%",
          height: `${height}px`,
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Flex
          background={barColor}
          style={{
            width: `${percentage}%`,
            transition: "width 0.3s ease-in-out",
          }}
          glow={glow}
        />
      </Flex>

      {showPercentage && (
        <Text onBackground="brand-weak" size="s" align="end">
          {Math.round(percentage)}%
        </Text>
      )}
    </Flex>
  );
}
