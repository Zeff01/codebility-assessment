import React from "react";

export function WrapperComponents({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[900px] max-lg:p-5 mx-auto">{children}</div>;
}
