"use client";

import React, { forwardRef } from "react";

import type { IconButtonProps } from ".";
import { Flex, IconButton, Text } from ".";

interface InteractiveDetailsProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  iconButtonProps?: IconButtonProps;
  onClick: () => void;
  className?: string;
  id?: string;
}

const InteractiveDetails: React.FC<InteractiveDetailsProps> = forwardRef<
  HTMLDivElement,
  InteractiveDetailsProps
>(({ label, description, iconButtonProps, onClick, className, id }, ref) => {
  return (
    <Flex
      ref={ref}
      direction="column"
      className={className}
      onClick={onClick}
      id={id}
      role="button" // Added role for accessibility
      tabIndex={0} // Added tabIndex for keyboard accessibility
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Flex gap="4" vertical="center">
        <Text as="span" variant="label-default-m" onBackground="neutral-strong">
          {label}
        </Text>
        {iconButtonProps?.tooltip && (
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            role="button" // Added role for accessibility
            tabIndex={0} // Added tabIndex for keyboard accessibility
          >
            <IconButton size="s" variant="ghost" icon="helpCircle" {...iconButtonProps} />
          </div>
        )}
      </Flex>
      {description && (
        <Text as="span" variant="body-default-s" onBackground="neutral-weak">
          {description}
        </Text>
      )}
    </Flex>
  );
});

InteractiveDetails.displayName = "InteractiveDetails";

export { InteractiveDetails };
export type { InteractiveDetailsProps };
