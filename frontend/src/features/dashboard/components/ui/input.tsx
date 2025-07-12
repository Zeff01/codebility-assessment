import { InputHTMLAttributes } from "react";

/**
 * Input component
 *
 * A responsive reusable input component that can be used to create a input.
 *
 * @param className - className for the input
 * @param type - type for the input
 * @param leftSection - left section for the input
 * @param rightSection - right section for the input
 * @param radius - radius for the input
 * @param leftSectionClassName - className for the left section
 * @param rightSectionClassName - className for the right section
 * @param props - props for the input
 * @returns Input component
 *
 * @example
 * <Input className="w-full" type="text" leftSection={<SearchIcon />} rightSection={<Button>Search</Button>} />
 */

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  leftSectionClassName?: string;
  rightSectionClassName?: string;
}

function Input({
  className,
  type = "text",
  leftSection,
  rightSection,
  radius = "md",
  leftSectionClassName,
  rightSectionClassName,
  ...props
}: InputProps) {
  return (
    <main
      className={`w-full border border-gray-300 p-1 rounded-${radius} flex items-center justify-center ${className}`}>
      {leftSection && (
        <div className={`p-1 pl-4 ${leftSectionClassName}`}>{leftSection}</div>
      )}
      <input
        type={type}
        className='w-full border-none p-1 px-4 text-sm sm:text-base md:text-lg lg:text-xl outline-none'
        {...props}
      />
      {rightSection && (
        <div className={`p-1 pr-4 ${rightSectionClassName}`}>
          {rightSection}
        </div>
      )}
    </main>
  );
}

export default Input;
