import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva([
  "absolute",
  "-top-7",
  "opacity-0",
  "transition-opacity",
  "rounded",
  "bg-slate-800 dark:bg-slate-900",
  "p-1 px-2",
  "text-xs",
  "text-slate-100",
  "group-hover:opacity-100",
  "text-nowrap",
]);

type TooltipProps = ComponentProps<"div"> &
  VariantProps<typeof styles> & { tooltip: string };

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className, tooltip, ...props }, ref) => {
    return (
      <div
        ref={ref}
        id="tooltipDiv"
        className={`group relative flex justify-center ${className}`}
        {...props}
      >
        {children}
        <span className={cn(styles({}))}>{tooltip}</span>
      </div>
    );
  }
);
