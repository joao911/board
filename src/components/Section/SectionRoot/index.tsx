import { ComponentProps } from "react";

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
      className="bg-navy-800 rounded-xl border-[0.5px] border-navy-500 flex flex-col gap-1"
      {...props}
    >
      {children}
    </div>
  );
};
