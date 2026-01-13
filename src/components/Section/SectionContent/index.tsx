import { ComponentProps } from "react";

interface SectionContentProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const SectionContent = ({ children, ...props }: SectionContentProps) => {
  return (
    <div className="flex flex-col gap-2.5 overflow-y-scroll p-3" {...props}>
      {children}
    </div>
  );
};
