"use client";

import React, { forwardRef, useState } from "react";

import type { InputProps } from ".";
import { IconButton, Input } from ".";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      ref={ref}
      type={showPassword ? "text" : "password"}
      hasSuffix={
        <IconButton
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          variant="ghost"
          icon={showPassword ? "eyeOff" : "eye"}
          size="s"
          type="button"
        />
      }
    />
  );
});

PasswordInput.displayName = "PasswordInput";
