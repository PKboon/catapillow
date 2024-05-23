import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva(
  [
    "flex",
    "items-center",
    "enabled:shadow-md",
    "py-1.5",
    "px-3",
    "rounded-full",
    "font-semibold",
    "text-sm",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:bg-slate-400",
    "disabled:text-slate-700",
    "disabled:opacity-65",
  ],
  {
    variants: {
      color: {
        primary: [
          "text-primaryLight-50 bg-primaryLight-500",
          "hover:bg-primaryLight-400",
          "focus:bg-primaryLight-400",
          "active:bg-primaryLight-600",
        ],
        secondary: [
          "text-primaryLight-500 bg-slate-50",
          "hover:text-primaryLight-50 hover:bg-primaryLight-400",
          "focus:text-primaryLight-50 focus:bg-primaryLight-400",
          "active:text-primaryLight-50 active:bg-primaryLight-500",
        ],
        success: [
          "text-success-800 bg-success-100",
          "hover:text-success-50 hover:bg-success-500",
          "focus:text-success-50 focus:bg-success-500",
          "active:text-success-900 active:bg-success-400",
        ],
        danger: [
          "text-danger-700 bg-danger-100",
          "hover:text-danger-50 hover:bg-danger-500",
          "focus:text-danger-50 focus:bg-danger-500",
          "active:text-danger-950 active:bg-danger-400",
        ],
        warning: [
          "text-warning-800 bg-warning-100",
          "hover:text-warning-900 hover:bg-warning-300",
          "focus:text-warning-900 focus:bg-warning-300",
          "active:text-warning-950 active:bg-warning-400",
        ],
        info: [
          "text-info-800 bg-info-100",
          "hover:bg-info-300",
          "focus:bg-info-300",
          "active:text-info-50 active:bg-info-400",
        ],
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

type CButtonProps = ComponentProps<"button"> & VariantProps<typeof styles>;

export const CButton = forwardRef<HTMLButtonElement, CButtonProps>(
  ({ color, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(styles({ color, className }))} {...props}>
        {props.children}
      </button>
    );
  }
);
