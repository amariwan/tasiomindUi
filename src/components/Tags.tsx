"use client";

import React, { forwardRef } from "react";
import { Flex, Tag } from ".";
import type { TagProps } from "./Tag";

interface TagsProps extends React.ComponentProps<typeof Flex> {
  tags: string[];
  limit?: number;
  tagProps?: Partial<TagProps>;
  prefixIcon?: true;
}

const Tags = forwardRef<HTMLDivElement, TagsProps>(
  ({ tags, limit, tagProps = {}, prefixIcon, ...rest }, ref) => {
    return (
      <Flex ref={ref} fillWidth gap="8" marginY="8" wrap {...rest}>
        {tags.slice(0, limit).map((tag, index) => (
          <Tag
            key={index}
            label={tag}
            variant="neutral"
            {...tagProps}
            prefixIcon={prefixIcon ? tag : undefined}
          />
        ))}
      </Flex>
    );
  },
);

Tags.displayName = "Tags";

export { Tags };
export type { TagsProps };
