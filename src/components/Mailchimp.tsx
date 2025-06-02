"use client";

import type { Effects } from "@/types";
import React, { useState, type ReactNode } from "react";


import { Background, Button, Column, Flex, Heading, Input, Text } from ".";

function debounce<TArgs extends unknown[]>(func: (...args: TArgs) => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: TArgs) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

type NewsletterProps = {
  display: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
  effects: Effects;
  action: string;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const { effects } = newsletter;

  const validateEmail = (email: string) => {
    if (email === "") return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showError = (value: string) => {
    const isValid = validateEmail(value);
    setError(isValid ? "" : "Please enter a valid email address.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched) {
      showError(value);
    }
  };

  const debouncedChange = debounce(handleChange, 600);

  const handleBlur = () => {
    setTouched(true);
    showError(email);
  };
  return (
    <Column
      overflow="hidden"
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-medium"
    >
      <Background
        mask={{
          cursor: effects.mask.cursor,
          x: effects.mask.x,
          y: effects.mask.y,
          radius: effects.mask.radius,
        }}
        gradient={{
          display: effects.gradient.display,
          x: effects.gradient.x,
          y: effects.gradient.y,
          tilt: effects.gradient.tilt,
          colorStart: effects.gradient.colorStart,
          colorEnd: effects.gradient.colorEnd,
          opacity: effects.gradient.opacity as
            | 0
            | 10
            | 20
            | 30
            | 40
            | 50
            | 60
            | 70
            | 80
            | 90
            | 100,
        }}
        dots={{
          display: effects.dots.display,
          color: effects.dots.color,
          size: effects.dots.size,
          opacity: effects.dots.opacity,
        }}
        grid={{
          display: effects.grid.display,
          color: effects.grid.color,
          opacity: effects.grid.opacity,
        }}
        lines={{
          display: effects.lines.display,
          opacity: effects.lines.opacity,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        action={action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <Flex id="mc_embed_signup_scroll" fillWidth maxWidth={24} gap="8">
          <Input
            formNoValidate
            labelAsPlaceholder
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            label="Email"
            required
            onChange={(e) => {
              if (touched) {
                handleChange(e);
              } else {
                debouncedChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={touched && error ? error : undefined}
          />
          <div style={{ display: "none" }}>
            <input
              type="checkbox"
              readOnly
              name="group[3492][1]"
              id="mce-group[3492]-3492-0"
              value=""
              checked
            />
          </div>
          <div id="mce-responses" className="clearfalse">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              readOnly
              name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa"
              tabIndex={-1}
              value=""
            />
          </div>
          <div className="clear">
            <Flex height="48" vertical="center">
              <Button id="mc-embedded-subscribe" value="Subscribe" size="m" fillWidth>
                Subscribe
              </Button>
            </Flex>
          </div>
        </Flex>
      </form>
    </Column>
  );
};
