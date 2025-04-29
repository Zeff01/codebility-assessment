import { ComponentProps, ReactNode } from "react";

type HeroCardProps = {
  title: string;
  subtitle?: string;
  button: ReactNode;
  isPrimaryCard?: boolean;
} & ComponentProps<"div">;

export const HeroCard = ({ title, subtitle, button, isPrimaryCard, ...props }: HeroCardProps) => {
  const titleElement = isPrimaryCard ? (
    <h1 className="h2 order-2">{title}</h1>
  ) : (
    <h3 className="h4 order-2">{title}</h3>
  );

  const subtitleElement = subtitle && (
    <span className="inline-block order-1 opacity-40 text-base capitalize font-medium">
      {subtitle}
    </span>
  );

  return (
    <div
      {...props}
      className={`bg-background-secondary p-8 laptop:p-12 rounded-3xl text-white relative ${props.className}`}
    >
      <div className="grid gap-6 justify-items-start">
        {titleElement}
        {subtitleElement}
        <div className="order-3 mt-4">{button}</div>
      </div>
    </div>
  );
};
