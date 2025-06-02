"use client";

import type { ReactNode } from "react";
import { Avatar, Button, Flex } from ".";
import type { ButtonProps } from "./Button";

interface BtnWithAvatarProps extends ButtonProps {
  href: string;
  label: string;
  avatarSrc?: string;
  avatarVisible?: boolean;
  icon?: ReactNode;
  testId?: string;
  id?: string;
}

export const BtnWithAvatar = ({
  href,
  label,
  avatarSrc,
  icon,
  avatarVisible = !!avatarSrc,
  variant = "secondary",
  size = "m",
  testId = "BtnWithAvatar",
  id = "BtnWithAvatar",
  ...rest
}: BtnWithAvatarProps) => {
  return (
    <Button
      id={id}
      href={href}
      variant={variant}
      size={size}
      arrowIcon
      aria-label={label}
      data-testid={testId}
      justifyContent="flex-start"
      data-border="rounded"
      {...rest}
    >
      <Flex gap="8" vertical="center">
        {avatarVisible && avatarSrc && (
          <Avatar
            style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
            size="m"
            src={avatarSrc}
          />
        )}
        {icon}
        {label}
      </Flex>
    </Button>
  );
};
