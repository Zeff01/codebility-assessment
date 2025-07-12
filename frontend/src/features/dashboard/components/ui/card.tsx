import { HTMLAttributes } from "react";

/**
 * Card component
 *
 * A responsive reusable compound component that can be used to create a card.
 *
 * @param className - className for the card
 * @param children - children for the card
 * @param props - props for the card
 * @returns Card component
 *
 * @example
 * <Card className="bg-gray-100 shadow-none">
 *   <Card.Header>
 *     <Card.Title>Card Title</Card.Title>
 *   </Card.Header>
 *   <Card.Content>
 *     <Card.Text>Card Text</Card.Text>
 *   </Card.Content>
 *   <Card.Footer>
 *     <Button>Button</Button>
 *   </Card.Footer>
 * </Card>
 */

// Main Card component
function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <article className={`shadow-sm ${className}`} {...props}>
      {children}
    </article>
  );
}

// Card.Header component
function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center justify-center w-full ${className}`}
      {...props}>
      {children}
    </div>
  );
}

// Card.Title component
function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 ${className}`}
      {...props}>
      {children}
    </h3>
  );
}

// Card.Section component
function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`text-xs sm:text-sm md:text-base lg:text-lg ${className}`}
      {...props}>
      {children}
    </div>
  );
}

// Card.Footer component
function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`w-full ${className}`} {...props}>
      {children}
    </div>
  );
}

// Attach sub-components to the main Card component
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Footer = CardFooter;

export default Card;
