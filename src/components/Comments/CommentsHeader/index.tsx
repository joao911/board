import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardNumberProps extends ComponentProps<"div"> {}

export const CommentsHeader = ({ className, ...props }: CardNumberProps) => {
  return (
    <div
      className={twMerge("flex items-baseline gap-1", className)}
      {...props}
    />
  );
};
