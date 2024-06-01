import { cn } from "@/utils";
import { Icon, IconProps } from "@iconify/react";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const styles = cva([], {
  variants: {
    size: {
      xxs: "text-[.625rem]",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const getDimension = (size: string | null | undefined) => {
  switch (size) {
    case "xxs":
      return ".625rem";
    case "xs":
      return ".75rem";
    case "sm":
      return ".875rem";
    case "md":
      return "1rem";
    case "lg":
      return "1.125rem";
    case "xl":
      return "1.25rem";
    case "xxl":
      return "1.5rem";
    default:
      return "1rem";
  }
};

type CIconProps = VariantProps<typeof styles> & IconProps;

export const CIcon = forwardRef<SVGSVGElement, CIconProps>(
  ({ size, icon, className, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(styles({ size, className }))}
        width={getDimension(size)}
        height={getDimension(size)}
        style={{ lineHeight: "0", ...props.style }}
        {...props}
      />
    );
  }
);
