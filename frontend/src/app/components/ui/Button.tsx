interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl",
    secondary:
      "bg-teal-500 text-white hover:bg-teal-600 shadow-lg hover:shadow-xl",
    outline:
      "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
