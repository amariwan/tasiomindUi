"use client";
import { useRouter } from "next/navigation";
import { Button } from "./";

export const BackBtn: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      data-border="rounded"
      onClick={() => router.back()}
      weight="default"
      variant="tertiary"
      size="s"
      prefixIcon="chevronLeft"
      label="Back"
    />
  );
};
