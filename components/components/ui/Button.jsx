// components/ui/Button.jsx
export default function Button({
  children,
  variant = "primary",
  size = "md",
  href = "#",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1] cursor-pointer";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    sm: "px-4 py-2 text-sm",
  };

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] shadow-lg shadow-[#6366F1]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5",
    secondary:
      "text-slate-800 bg-white/70 backdrop-blur-md border border-slate-200 hover:bg-white hover:-translate-y-0.5 shadow-sm",
    ghost:
      "text-slate-600 hover:text-[#6366F1] hover:bg-[#6366F1]/5",
  };

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}