"use client";

import React, { forwardRef } from "react";

import styles from "./styles/Card.module.scss";

import { Flex } from ".";

interface CardProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, style, className, ...rest }, ref) => {
    return (
      <Flex
        ref={ref}
        background="surface"
        transition="macro-medium"
        border="neutral-medium"
        cursor="interactive"
        className={styles.card}
        {...rest}
      >
        {children}
      </Flex>
    );
  },
);

Card.displayName = "Card";
export { Card };
