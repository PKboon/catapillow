import { cn, getPadding } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Symbol } from "../Symbols/Symbol";
import { Tooltip } from "../Tooltips/Tooltip";

const styles = cva([
  "flex items-center gap-1 px-1 py-0.5",
  "rounded-md",
  "text-textLight text-sm",
  "bg-bgSecondaryLight",
  "hover:bg-slate-500 hover:bg-opacity-15",
  "focus:bg-slate-500 focus:bg-opacity-15",
  "active:bg-slate-500 active:bg-opacity-30",
  "dark:text-textDark",
  "dark:bg-bgSecondaryDark",
  "dark:hover:bg-slate-500 dark:hover:bg-opacity-30",
  "dark:focus:bg-slate-500 dark:focus:bg-opacity-30",
  "dark:active:bg-slate-500 dark:active:bg-opacity-70",
]);

type FeatureButtonProps = ComponentProps<"button"> &
  VariantProps<typeof styles> & {
    symbolLeft?: string;
    symbolRight?: string;
    symbolSize?: string;
    tooltip?: string;
  };

export const FeatureButton = forwardRef<HTMLButtonElement, FeatureButtonProps>(
  (
    {
      children,
      symbolLeft,
      symbolRight,
      symbolSize = "text-lg",
      tooltip,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {tooltip ? (
          <Tooltip tooltip={tooltip}>
            <button
              ref={ref}
              className={cn(
                styles({}),
                children && getPadding(symbolLeft, symbolRight)
              )}
              {...props}
            >
              <Symbol symbol={symbolLeft} className={symbolSize} />
              {children}
              <Symbol symbol={symbolRight} className={symbolSize} />
            </button>
          </Tooltip>
        ) : (
          <button
            ref={ref}
            className={cn(
              styles({}),
              children && getPadding(symbolLeft, symbolRight)
            )}
            {...props}
          >
            <Symbol symbol={symbolLeft} className={symbolSize} />
            {children}
            <Symbol symbol={symbolRight} className={symbolSize} />
          </button>
        )}
      </>
    );
  }
);
