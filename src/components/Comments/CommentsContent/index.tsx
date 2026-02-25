import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CommentsContentProps extends ComponentProps<"div"> {}

export const CommentsContent = ({
  className,
  ...props
}: CommentsContentProps) => {
  return (
    <div
      className={twMerge(
        "flex-1 px-3 py-2.5 rounded-lg bg-navy-700 border-[0.5px] border-navy-600 flex flex-col gap-1",
        className,
      )}
      {...props}
    ></div>
  );
};
