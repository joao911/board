import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionHeaderProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const SectionHeader = ({
  children,
  className,
  ...props
}: SectionHeaderProps) => {
  return (
    <div
      className={twMerge("flex items-center justify-between px-3", className)}
      {...props}
    >
      {children}
    </div>
  );
};
