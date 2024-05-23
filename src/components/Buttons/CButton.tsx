import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva(
  [
    "flex",
    "items-center",
    "shadow",
    "py-1.5",
    "px-3",
    "rounded-full",
    "font-semibold",
    "text-sm",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      color: {
        primary: "bg-primaryLight-500 text-primaryLight-50",
        secondary: "bg-slate-50 text-pink-500",
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
