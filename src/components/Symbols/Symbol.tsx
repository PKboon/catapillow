import { Icon } from "@iconify/react";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils";

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

type SymbolProps = VariantProps<typeof styles> & {
  symbol?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Symbol = forwardRef<SVGSVGElement, SymbolProps>(
  ({ size, symbol, className, style, ...props }, ref) => {
    return (
      <>
        {symbol && (
          <Icon
            ref={ref}
            icon={symbol}
            className={cn(styles({ size, className }))}
            style={{ lineHeight: "0", ...style }}
            {...props}
          />
        )}
      </>
    );
  }
);
