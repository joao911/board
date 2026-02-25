import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CommentTextProps extends ComponentProps<"p"> {}

export const CommentsText = ({ className, ...props }: CommentTextProps) => {
  return (
    <p
      className={twMerge("text-sm leading-relaxed text-navy-100", className)}
      {...props}
    />
  );
};
