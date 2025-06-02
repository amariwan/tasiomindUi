"use client";

import { useEffect, useState } from "react";
import { Kbar, type KbarItem } from ".";

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [items, setItems] = useState<KbarItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/search");
        if (!response.ok) {
          throw new Error(`Failed to fetch search items: ${response.statusText}`);
        }
        const data: KbarItem[] = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid response: Expected an array of Kbar items");
        }
        if (isMounted) {
          setItems(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : "Unknown error";
          console.error("[SearchProvider] Error fetching items:", err);
          setError(errorMessage);
          setItems([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, []);

  return <Kbar items={items}>{children}</Kbar>;
}
