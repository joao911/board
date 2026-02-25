import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CommentTimeProps extends ComponentProps<"p"> {}

export const CommentsTime = ({ className, ...props }: CommentTimeProps) => {
  return (
    <p className={twMerge("text-xs text-navy-200", className)} {...props} />
  );
};
