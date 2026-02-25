import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CommentTimeProps extends ComponentProps<"span"> {
  children: React.ReactNode;
}

export const CommentsFooter = ({
  children,

  className,
  ...props
}: CommentTimeProps) => {
  return (
    <span className={twMerge("", className)} {...props}>
      {children}
    </span>
  );
};
