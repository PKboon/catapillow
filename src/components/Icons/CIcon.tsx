import { cn } from "@/utils";
import { Icon, IconProps } from "@iconify/react";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const styles = cva([], {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-base",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CIconProps = VariantProps<typeof styles> & IconProps;

export const CIcon = forwardRef<SVGSVGElement, CIconProps>(
  ({ size, icon, className, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        icon={icon}
        className={cn(styles({ size, className }))}
        style={{ lineHeight: "0", ...props.style }}
        {...props}
      />
    );
  }
);
