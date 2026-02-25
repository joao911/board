import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}
export const CommentsRoot = ({
  children,
  className,
  ...props
}: CardRootProps) => {
  return (
    <div className={twMerge(" flex items-start gap-2", className)} {...props}>
      {children}
    </div>
  );
};
