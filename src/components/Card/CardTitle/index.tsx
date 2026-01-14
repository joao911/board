import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardTitleProps extends ComponentProps<"span"> {
  icon?: React.ReactNode;
  title: string;
}

export const CardTitle = ({
  icon,
  title,
  className,
  ...props
}: CardTitleProps) => {
  return (
    <span className={twMerge("text-sm font-medium", className)} {...props}>
      {icon}
      {title}
    </span>
  );
};
