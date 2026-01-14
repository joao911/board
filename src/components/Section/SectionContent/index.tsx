import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionContentProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const SectionContent = ({
  children,
  className,
  ...props
}: SectionContentProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2.5 overflow-y-scroll p-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
