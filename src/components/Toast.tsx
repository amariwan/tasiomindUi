"use client";

import classNames from "classnames";
import React, { forwardRef, useEffect, useState } from "react";

import styles from "./styles/Toast.module.scss";

import { Flex, Icon, IconButton, Text } from ".";

interface ToastProps {
  className?: string;
  variant: "success" | "danger";
  icon?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
  children: React.ReactNode;
}

const iconMap = {
  success: "checkCircle",
  danger: "errorCircle",
};

const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant, className, icon = true, onClose, action, children }, ref) => {
    const [visible, setVisible] = useState(true);
    const [render, setRender] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), 6000);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (!visible) {
        const timeout = setTimeout(() => {
          setRender(false);
          onClose?.();
        }, 300);
        return () => clearTimeout(timeout);
      }
    }, [visible, onClose]);

    if (!render) return null;

    return (
      <Flex
        ref={ref}
        fillWidth
        background="surface"
        radius="l"
        paddingY="12"
        paddingX="20"
        border="neutral-medium"
        role="alert"
        aria-live="assertive"
        className={classNames(className, styles.toast, styles[variant], {
          [styles.visible]: visible,
          [styles.hidden]: !visible,
        })}
      >
        <Flex fillWidth vertical="center" gap="8">
          {icon && <Icon size="l" onBackground={`${variant}-medium`} name={iconMap[variant]} />}
          <Text variant="body-default-s" style={{ width: "100%" }} as="div">
            {children}
          </Text>
          {action && <div>{action}</div>}
          {onClose && (
            <IconButton
              variant="ghost"
              icon="close"
              size="m"
              tooltip="Hide"
              tooltipPosition="top"
              onClick={() => setVisible(false)}
            />
          )}
        </Flex>
      </Flex>
    );
  },
);

Toast.displayName = "Toast";

export { Toast };
