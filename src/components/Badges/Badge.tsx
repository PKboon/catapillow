import { cn, getPadding } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Symbol } from "../Symbols/Symbol";

const styles = cva(
  [
    "flex",
    "items-center",
    "rounded-full",
    "gap-0.5",
    "text-xs",
    "leading-[0]",
    "font-bold",
  ],
  {
    variants: {
      ctype: {
        default: ["bg-slate-400 text-slate-50", "dark:text-slate-700"],
        success: ["bg-success-500 text-success-50", "dark:text-success-900"],
        danger: ["bg-danger-500 text-danger-50", "dark:text-danger-900"],
        warning: ["bg-warning-500 text-warning-50", "dark:text-warning-900"],
        info: ["bg-info-500 text-info-50", "dark:text-info-900"],
      },
    },
    defaultVariants: {
      ctype: "default",
    },
  }
);

type BadgeProps = ComponentProps<"div"> &
  VariantProps<typeof styles> & {
    symbolLeft?: string;
    symbolRight?: string;
  };

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ ctype, className, symbolLeft, symbolRight, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles({ ctype, className }),
          getPadding(symbolLeft, symbolRight)
        )}
        {...props}
      >
        <Symbol symbol={symbolLeft} className="text-sm" />
        {children}
        <Symbol symbol={symbolRight} className="text-sm" />
      </div>
    );
  }
);
