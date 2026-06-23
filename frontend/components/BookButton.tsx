import React from "react";

type BookButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

function BookButton({ label, icon, onClick, size = "md"}: BookButtonProps) {

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-4 text-base",
  };

  return (
       <button
        onClick={onClick}
        className={`
            cursor-pointer
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[rgb(117,13,234)]
            font-medium
            text-white
            shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(117,13,234,0.35)]
            transition-all
            hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_30px_rgba(117,13,234,0.45)]
            hover:scale-[1.02]
            active:scale-[0.98]
            ${sizes[size]}
        `}
        >
      <span>{label}</span>

      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
}

export default BookButton;