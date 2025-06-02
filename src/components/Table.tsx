"use client";

import { memo, ReactNode, useMemo, useState } from "react";
import { Flex, Row } from ".";
import { IconButton } from "./IconButton";

type SortDirection = "ascending" | "descending" | null;

type Header = {
  content: ReactNode;
  key: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  width?: string;
};

type TableProps = {
  data: {
    headers: Header[];
    rows: ReactNode[][];
  };
  onRowClick?: (rowIndex: number) => void;
  ariaLabel?: string;
  zebraStripes?: boolean;
};

const getSortedRows = (
  rows: ReactNode[][],
  headers: Header[],
  sortConfig: { key: string; direction: SortDirection } | null,
) => {
  if (!sortConfig) return rows;

  const headerIndex = headers.findIndex((header) => header.key === sortConfig.key);
  if (headerIndex === -1) return rows;

  return [...rows].sort((a, b) => {
    const aValue = String(a[headerIndex]);
    const bValue = String(b[headerIndex]);

    // Numerische Sortierung, falls möglich
    const aNum = parseFloat(aValue);
    const bNum = parseFloat(bValue);
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return sortConfig.direction === "ascending" ? aNum - bNum : bNum - aNum;
    }

    // Fallback auf String-Sortierung
    return sortConfig.direction === "ascending"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });
};

const Table = memo(
  ({ data, onRowClick, ariaLabel = "Data table", zebraStripes = true }: TableProps) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: SortDirection } | null>(
      null,
    );

    const handleSort = (key: string) => {
      let direction: SortDirection = "ascending";
      if (sortConfig?.key === key) {
        direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
      }
      setSortConfig({ key, direction });
    };

    const sortedRows = useMemo(
      () => getSortedRows(data.rows, data.headers, sortConfig),
      [data.rows, data.headers, sortConfig],
    );

    const headers = data.headers.map((header, index) => (
      <th
        key={header.key}
        style={{
          textAlign: header.align || "left",
          borderBottom: "1px solid var(--neutral-alpha-medium)",
          width: header.width,
          padding: "12px 16px",
        }}
        className="font-label font-default font-s"
        scope="col"
        aria-sort={sortConfig?.key === header.key ? (sortConfig.direction ?? "none") : "none"}
      >
        <Row gap="8" vertical="center">
          <span>{header.content}</span>
          {header.sortable && (
            <IconButton
              icon={
                sortConfig?.key === header.key && sortConfig.direction
                  ? sortConfig.direction === "ascending"
                    ? "chevronUp"
                    : "chevronDown"
                  : "chevronDown"
              }
              size="s"
              variant="ghost"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleSort(header.key);
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSort(header.key);
                }
              }}
              aria-label={`Sort by ${header.content} ${sortConfig?.direction || "ascending"}`}
              style={{
                opacity: sortConfig?.key === header.key ? 1 : 0.6,
                transition: "opacity 0.2s ease",
              }}
              tabIndex={0}
            />
          )}
        </Row>
      </th>
    ));

    const rows = sortedRows.map((row, index) => (
      <tr
        key={index}
        onClick={onRowClick ? () => onRowClick(index) : undefined}
        className={`${onRowClick ? "cursor-interactive hover-row" : ""} ${
          zebraStripes && index % 2 === 0 ? "zebra-row" : ""
        }`}
        style={{ transition: "background-color 0.2s ease" }}
        tabIndex={onRowClick ? 0 : undefined}
        onKeyDown={
          onRowClick
            ? (e: React.KeyboardEvent) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onRowClick(index);
                }
              }
            : undefined
        }
        role={onRowClick ? "button" : undefined}
      >
        {row.map((cell, cellIndex) => (
          <td
            key={cellIndex}
            className="px-16 py-12 font-body font-default font-s"
            style={{ textAlign: data.headers[cellIndex].align || "left" }}
          >
            {cell}
          </td>
        ))}
      </tr>
    ));

    return (
      <Flex fillWidth radius="m" marginTop="8" marginBottom="16" glow>
        <style jsx>{`
          .hover-row:hover {
            background-color: var(--neutral-alpha-weak);
          }
          .zebra-row {
            background-color: var(--neutral-alpha-weakest);
          }
          table {
            border-collapse: collapse;
          }
          th:focus-within,
          tr:focus {
            outline: 2px solid var(--primary-strong);
            outline-offset: -2px;
          }
        `}</style>
        <table role="table" aria-label={ariaLabel}>
          <thead className="neutral-on-background-strong">
            <tr>{headers}</tr>
          </thead>
          <tbody className="neutral-on-background-medium">
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td
                  colSpan={data.headers.length}
                  className="px-24 py-12 font-body font-default font-s text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Flex>
    );
  },
);

Table.displayName = "Table";

export { Table };
