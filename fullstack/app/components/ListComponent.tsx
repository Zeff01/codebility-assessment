import React from "react";

interface ListComponentTypes<T>
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  data: T[];
  render: (item: T, index?: number) => React.ReactNode;
}

export function ListComponent<T>({
  data,
  render,
  ...props
}: ListComponentTypes<T>) {
  return (
    <div {...props}>
      {data.length > 0 && data.map((item, index) => render(item, index))}
    </div>
  );
}
