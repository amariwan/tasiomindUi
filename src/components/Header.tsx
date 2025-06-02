"use client";

import { type NavItem } from "@/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Flex, Line, NavigationElement, SearchProvider, ThemeToggle, ToggleButton } from "./";
import styles from "./styles/Header.module.scss";

interface HeaderProps {
  navItems: NavItem[];
  routes: Record<string, boolean>;
}

const Header = ({ navItems, routes }: HeaderProps) => {
  const pathname = usePathname() ?? "";

  const { validatedNavItems, isActive } = useMemo(() => {
    const validated = navItems.filter(({ path }) => path in routes);
    const isActivePath = (path: string) =>
      path === "/" ? pathname === path : pathname.startsWith(path);
    return { validatedNavItems: validated, isActive: isActivePath };
  }, [pathname]);

  return (
    <Flex
      as="nav"
      fillWidth
      horizontal="center"
      className={styles.header}
      zIndex={5}
      role="Navigation"
      aria-label="navigation"
    >
      <Flex
        background="surface"
        radius="s"
        shadow="l"
        padding="8"
        horizontal="center"
        vertical="center"
        role="group"
        aria-label="Navigation"
        gap="4"
        glow
      >
        {validatedNavItems.map((item) => (
          <NavigationElement key={item.path} item={item} isActive={isActive(item.path)} />
        ))}
        <Line vert background="neutral-alpha-strong" />
        <ThemeToggle />
        <SearchProvider>
          <ToggleButton
            prefixIcon="search"
            selected={false}
            aria-label="Search"
            tooltip="Search (⌘K)"
            role="button"
          />
        </SearchProvider>
      </Flex>
    </Flex>
  );
};

Header.displayName = "Header";
export { Header };
