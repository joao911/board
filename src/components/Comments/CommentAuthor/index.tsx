import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CommentAuthorProps extends ComponentProps<"p"> {}

export const CommentsAuthor = ({ className, ...props }: CommentAuthorProps) => {
  return <p className={twMerge("text-sm font-medium", className)} {...props} />;
};
