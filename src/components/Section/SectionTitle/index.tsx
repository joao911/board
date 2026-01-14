import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps extends ComponentProps<"span"> {
  icon?: React.ReactNode;
  title: string;
}

export const SectionTitle = ({
  icon,
  title,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <span
      className={twMerge(
        "bg-navy-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs",
        className
      )}
      {...props}
    >
      {icon}
      {title}
    </span>
  );
};
