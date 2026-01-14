import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardFooterProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const CardFooter = ({
  children,

  className,
  ...props
}: CardFooterProps) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
};
