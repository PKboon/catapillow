import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva(
  [
    "flex gap-1 p-1",
    "rounded-[8px]",
    "drop-shadow-md",
    "bg-bgSecondaryLight dark:bg-bgSecondaryDark",
  ],
  {
    variants: {
      alignment: {
        horizontal: ["flex-row"],
        vertical: ["flex-col"],
      },
    },
    defaultVariants: {
      alignment: "vertical",
    },
  }
);

type FeatureButtonGroupProps = ComponentProps<"div"> &
  VariantProps<typeof styles>;

export const FeatureButtonGroup = forwardRef<
  HTMLDivElement,
  FeatureButtonGroupProps
>(({ alignment, children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles({ alignment, className }))} {...props}>
      {children}
    </div>
  );
});
