import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardRootProps extends ComponentProps<"a"> {
  children: ReactNode;
}
export const CardRoot = ({ children, className, ...props }: CardRootProps) => {
  return (
    <a
      href="/"
      className={twMerge(
        "bg-navy-700 border-[0.5px] border-navy-600 space-y-4 rounded-lg block p-2",
        "hover:navy-600/60 hover:border-navy-500 transition-colors duration-150",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
