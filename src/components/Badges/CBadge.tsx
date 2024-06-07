import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CIcon } from "../Icons/CIcon";

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

type CBadgeProps = ComponentProps<"div"> &
  VariantProps<typeof styles> & {
    iconLeft: string;
    iconRight: string;
    text: string;
  };

export const CBadge = forwardRef<HTMLDivElement, CBadgeProps>(
  ({ ctype, className, iconLeft, iconRight, children, ...props }, ref) => {
    const getPadding = () => {
      if (!iconLeft && !iconRight) return "p-2";

      const paddingY = "py-0.5 ";
      if (iconLeft && iconRight) return `${paddingY} px-1`;
      if (iconLeft) return `${paddingY} pr-1.5 pl-1`;
      if (iconRight) return `${paddingY} pr-1 pl-1.5`;
    };
    return (
      <div
        ref={ref}
        className={cn(styles({ ctype, className }), getPadding())}
        {...props}
      >
        {iconLeft && <CIcon icon={iconLeft} className="text-sm" />}
        {children}
        {iconRight && <CIcon icon={iconRight} className="text-sm" />}
      </div>
    );
  }
);
