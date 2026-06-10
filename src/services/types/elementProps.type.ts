import type { ReactNode } from "react";

export interface ElementProps<T> {
  field: keyof T;
  label: string;
  format: (row: T) => ReactNode;
}
