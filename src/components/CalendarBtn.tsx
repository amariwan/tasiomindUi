"use client";

import { forwardRef } from "react";
import { Flex, Icon, IconButton } from ".";

interface CalendarBtnProps {
  link: string;
  label?: string;
  iconName?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const CalendarBtn = forwardRef<HTMLDivElement, CalendarBtnProps>(
  (
    {
      link,
      label = "Schedule a call",
      iconName = "calendar",
      disabled = false,
      className,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <Flex
        ref={ref}
        {...rest}
        role="button"
        aria-label={label}
        aria-disabled={disabled}
        fitWidth
        border="brand-alpha-medium"
        style={{
          backdropFilter: "blur(var(--static-space-1))",
          transition: "all 0.2s ease",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
        }}
        background="brand-alpha-weak"
        radius="full"
        padding="4"
        gap="8"
        marginBottom="m"
        vertical="center"
        glow
        className={`
          ${className || ""}
          hover:bg-brand-alpha-medium
          active:bg-brand-alpha-strong
          focus:outline-none focus:ring-2 focus:ring-brand-weak
        `}
      >
        <Icon paddingLeft="12" name={iconName} onBackground="brand-weak" aria-hidden="true" />
        <Flex as="span" paddingX="8" style={{ fontWeight: 500, fontSize: "var(--font-size-body)" }}>
          {label}
        </Flex>
        <IconButton
          href={disabled ? undefined : link}
          data-border="rounded"
          variant="secondary"
          icon="chevronRight"
          disabled={disabled}
          aria-hidden="true"
        />
      </Flex>
    );
  },
);

CalendarBtn.displayName = "CalendarBtn";

export { CalendarBtn };
export type { CalendarBtnProps };
