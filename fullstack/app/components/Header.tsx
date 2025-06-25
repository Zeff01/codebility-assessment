import React from "react";

interface HeaderTypes {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderTypes) {
  return (
    <header className={`py-10 mb-10 ${className || ""}`}>{children}</header>
  );
}
