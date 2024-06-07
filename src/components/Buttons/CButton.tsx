import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva(
  [
    "flex",
    "gap-1",
    "items-center",
    "enabled:drop-shadow-md",
    "py-1.5",
    "px-4",
    "rounded-full",
    "font-semibold",
    "text-sm",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:bg-slate-300",
    "disabled:text-slate-500",
    "disabled:opacity-65",
  ],
  {
    variants: {
      ctype: {
        primary: [
          "text-primaryLight-50 bg-primaryLight-500",
          "hover:bg-primaryLight-400",
          "focus:bg-primaryLight-400",
          "active:bg-primaryLight-600",
          // "dark:text-primaryDark-950 dark:bg-primaryDark-400",
          // "dark:hover:text-primaryDark-950 dark:hover:bg-primaryDark-300",
          // "dark:focus:text-primaryDark-950 dark:focus:bg-primaryDark-300",
          // "dark:active:text-primaryDark-950 dark:active:bg-primaryDark-500",
        ],
        secondary: [
          "text-primaryLight-500 bg-slate-50",
          "hover:text-primaryLight-50 hover:bg-primaryLight-400",
          "focus:text-primaryLight-50 focus:bg-primaryLight-400",
          "active:text-primaryLight-50 active:bg-primaryLight-500",
          // "dark:text-primaryDark-950 dark:bg-slate-300",
          // "dark:hover:text-primaryDark-950 dark:hover:bg-primaryDark-300",
          // "dark:focus:text-primaryDark-950 dark:focus:bg-primaryDark-300",
          // "dark:active:text-primaryDark-950 dark:active:bg-primaryDark-500",
        ],
        success: [
          "text-success-800 bg-success-100",
          "hover:text-success-50 hover:bg-success-500",
          "focus:text-success-50 focus:bg-success-500",
          "active:text-success-900 active:bg-success-400",
          // "dark:text-success-50 dark:bg-success-700",
          // "dark:hover:text-success-100 dark:hover:bg-success-600",
          // "dark:focus:text-success-100 dark:focus:bg-success-600",
          // "dark:active:text-success-950 dark:active:bg-success-400",
        ],
        danger: [
          "text-danger-700 bg-danger-100",
          "hover:text-danger-50 hover:bg-danger-500",
          "focus:text-danger-50 focus:bg-danger-500",
          "active:text-danger-950 active:bg-danger-400",
          // "dark:text-danger-50 dark:bg-danger-700",
          // "dark:text-danger-50 dark:hover:bg-danger-600",
          // "dark:text-danger-50 dark:focus:bg-danger-600",
          // "dark:text-danger-50 dark:active:bg-danger-500",
        ],
        warning: [
          "text-warning-800 bg-warning-100",
          "hover:text-warning-900 hover:bg-warning-300",
          "focus:text-warning-900 focus:bg-warning-300",
          "active:text-warning-950 active:bg-warning-400",
          // "dark:text-warning-50 dark:bg-warning-600",
          // "dark:hover:text-warning-950 dark:hover:bg-warning-500",
          // "dark:focus:text-warning-950 dark:focus:bg-warning-500",
          // "dark:active:text-warning-950 dark:active:bg-warning-400",
        ],
        info: [
          "text-info-800 bg-info-100",
          "hover:bg-info-300",
          "focus:bg-info-300",
          "active:text-info-50 active:bg-info-400",
          // "dark:text-info-50 dark:bg-info-600",
          // "dark:hover:text-info-950 dark:hover:bg-info-500",
          // "dark:focus:text-info-950 dark:focus:bg-info-500",
          // "dark:active:text-info-950 dark:active:bg-info-400",
        ],
      },
    },
    defaultVariants: {
      ctype: "primary",
    },
  }
);

type CButtonProps = ComponentProps<"button"> & VariantProps<typeof styles>;

export const CButton = forwardRef<HTMLButtonElement, CButtonProps>(
  ({ ctype, className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(styles({ ctype, className }))} {...props}>
        {children}
      </button>
    );
  }
);
