import { ComponentProps } from "react";

interface SectionTitleProps extends ComponentProps<"span"> {
  icon?: React.ReactNode;
  title: string;
}

export const SectionTitle = ({ icon, title, ...props }: SectionTitleProps) => {
  return (
    <span
      className="bg-navy-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs"
      {...props}
    >
      {icon}
      {title}
    </span>
  );
};
