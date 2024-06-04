import { cn } from "@/utils";
import { IconProps } from "@iconify/react/dist/iconify.js";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CIcon } from "../Icons/CIcon";
import { CTooltip } from "../Tooltips/CTooltip";

const styles = cva(
  [
    "rounded-full",
    "text-slate-800 dark:text-slate-100",
    "hover:bg-black hover:bg-opacity-10",
    "focus:bg-black focus:bg-opacity-15",
    "dark:hover:bg-white dark:hover:bg-opacity-20",
    "dark:focus:bg-white dark:focus:bg-opacity-30",
    "active:bg-primaryLight-300",
    "dark:active:text-slate-800",
    "dark:active:bg-primaryDark-300",
    "disabled:opacity-65",
  ],
  {
    variants: {
      size: {
        sm: "p-1",
        md: "p-1",
        lg: "p-1.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type CActionIconButtonProps = ComponentProps<"button"> &
  IconProps & { tooltip: string } & VariantProps<typeof styles>;

export const CActionIconButton = forwardRef<
  HTMLButtonElement,
  CActionIconButtonProps
>(({ tooltip, icon, size, ...props }, ref) => {
  return (
    <CTooltip tooltip={tooltip}>
      <button ref={ref} className={cn(styles({ size }))} {...props}>
        <CIcon icon={icon} size={size} />
      </button>
    </CTooltip>
  );
});
