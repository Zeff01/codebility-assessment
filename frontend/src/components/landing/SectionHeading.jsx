export default function SectionHeading({
  title,
  description,
  align = "left",
  variant = "default",
}) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const titleTone = variant === "light" ? "text-white" : "text-slate-900";
  const bodyTone = variant === "light" ? "text-white/80" : "text-slate-600";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2
        className={`text-[clamp(1.8rem,4vw,2.65rem)] font-extrabold tracking-tight leading-[1.1] ${titleTone}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[clamp(0.98rem,1.6vw,1.1rem)] font-medium leading-relaxed ${bodyTone}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
