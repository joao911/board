import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps extends ComponentProps<"img"> {}
export const CommentsAvatar = ({ className, ...props }: CardHeaderProps) => {
  return (
    <img
      className={twMerge("size-8 rounded-full", className)}
      alt=""
      {...props}
    />
  );
};
