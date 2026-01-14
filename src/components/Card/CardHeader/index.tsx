import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps extends ComponentProps<"div"> {
  children: ReactNode;
}
export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  return (
    <div className={twMerge("flex flex-col gap-2", className)} {...props}>
      {children}
    </div>
  );
};
