import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionRootProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const SectionRoot = ({
  className,
  children,
  ...props
}: SectionRootProps) => {
  return (
    <div
      className={twMerge(
        "bg-navy-800 rounded-xl border-[0.5px] border-navy-500 flex flex-col gap-1 relative",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
