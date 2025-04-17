import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...otherProps } = props;
  return (
    <button
      className={twMerge(
        "text-white bg-black cursor-pointer py-3 px-[25px] text-[11px] rounded-full leading-[1.3em] border border-white",
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
