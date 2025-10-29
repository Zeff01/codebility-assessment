import { CSSProperties, ReactNode } from "react";

export interface CommonProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export declare namespace TypeAttributes {
  type Status = "success" | "warning" | "danger" | "info";
}
