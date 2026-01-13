import { ComponentProps } from "react";

interface SectionCountProps extends ComponentProps<"span"> {
  count: number;
}

export const SectionCount = ({ count, ...props }: SectionCountProps) => {
  return (
    <span className="text-navy-200 text-xs" {...props}>
      {count}
    </span>
  );
};
