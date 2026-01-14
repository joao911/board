import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardNumberProps extends ComponentProps<"span"> {
  count: number;
}

export const CardNumber = ({ count, className, ...props }: CardNumberProps) => {
  return (
    <span className={twMerge("text-navy-200 text-xs", className)} {...props}>
      {count}
    </span>
  );
};
