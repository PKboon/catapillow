import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { SymbolButton } from "../Buttons/SymbolButton";
import { Symbol } from "../Symbols/Symbol";

const styles = cva(
  [
    "flex",
    "relative",
    "rounded-md",
    "drop-shadow-md",
    "bg-bgSecondaryLight dark:bg-bgSecondaryDark",
  ],
  {
    variants: {
      ctype: {
        default: [],
        success: [],
        danger: [],
        warning: [],
        info: [],
      },
    },
    defaultVariants: {
      ctype: "default",
    },
  }
);

type AlertProps = ComponentProps<"div"> &
  VariantProps<typeof styles> & { header: string; dismissable: boolean };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    { ctype, header, className, children, dismissable = false, ...props },
    ref
  ) => {
    const [isDismissed, setIsDismissed] = useState(false);

    const getAlertDecors = () => {
      switch (ctype) {
        case "success":
          return {
            symbol: "herosymbols:check-circle-16-solid",
            symbolBg: "bg-success-500",
          };
        case "danger":
          return {
            symbol: "jam:close-circle-f",
            symbolBg: "bg-danger-500",
          };
        case "warning":
          return {
            symbol: "ph:warning-fill",
            symbolBg: "bg-warning-400",
          };
        case "info":
          return {
            symbol: "mdi:information-box",
            symbolBg: "bg-info-500",
          };
        default:
          return { symbol: "", symbolBg: "" };
      }
    };

    return (
      <>
        {/* ALERT */}
        {/* If isDismissed is false, show the alert */}
        {!isDismissed && (
          <div
            ref={ref}
            className={cn(styles({ ctype, className }))}
            {...props}
          >
            {/* SYMBOL SECTION */}
            {/* If there is the alert's symbol, show the symbol section */}
            {getAlertDecors().symbol.length > 0 && (
              <div className={`${getAlertDecors().symbolBg} p-2 rounded-l-md`}>
                <Symbol
                  symbol={getAlertDecors().symbol}
                  className="text-slate-100 dark:text-slate-800"
                  size="lg"
                />
              </div>
            )}
            {/* END SYMBOL SECTION */}

            {/* ALERT CONTENT */}
            <div className="pt-2 pb-3 px-3 rounded-r-md text-textLight dark:text-textDark">
              {/* ALERT HEADER */}
              {header && <h6 className="text-base font-bold">{header}</h6>}

              {/* BODY */}
              <div>{children}</div>
            </div>
            {/* END ALERT CONTENT */}

            {/* DISMISS BUTTON */}
            {dismissable && (
              <div className="absolute right-1 top-1">
                <SymbolButton
                  symbol="ep:close-bold"
                  tooltip="Close"
                  size="sm"
                  onClick={() => setIsDismissed(true)}
                />
              </div>
            )}
            {/* END DISMISS BUTTON */}
          </div>
        )}
      </>
    );
  }
);
