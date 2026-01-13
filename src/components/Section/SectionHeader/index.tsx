import { ComponentProps } from "react";

interface SectionHeaderProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const SectionHeader = ({ children, ...props }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-3" {...props}>
      {children}
    </div>
  );
};
