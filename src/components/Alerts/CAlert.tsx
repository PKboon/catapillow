import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { CActionIconButton } from "../Buttons/CActionIconButton";
import { CIcon } from "../Icons/CIcon";

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

type CAlertProps = ComponentProps<"div"> &
  VariantProps<typeof styles> & { header: string; dismissable: boolean };

export const CAlert = forwardRef<HTMLDivElement, CAlertProps>(
  (
    { ctype, header, className, children, dismissable = false, ...props },
    ref
  ) => {
    const [isDismissed, setIsDismissed] = useState(false);

    const getAlertDecors = () => {
      switch (ctype) {
        case "success":
          return {
            icon: "heroicons:check-circle-16-solid",
            iconBg: "bg-success-500",
          };
        case "danger":
          return {
            icon: "jam:close-circle-f",
            iconBg: "bg-danger-500",
          };
        case "warning":
          return {
            icon: "ph:warning-fill",
            iconBg: "bg-warning-400",
          };
        case "info":
          return {
            icon: "mdi:information-box",
            iconBg: "bg-info-500",
          };
        default:
          return { icon: "", iconBg: "" };
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
            {/* ICON SECTION */}
            {/* If there is the alert's icon, show the icon section */}
            {getAlertDecors().icon.length > 0 && (
              <div className={`${getAlertDecors().iconBg} p-2 rounded-l-md`}>
                <CIcon
                  icon={getAlertDecors().icon}
                  className="text-slate-100 dark:text-slate-800"
                  size="lg"
                />
              </div>
            )}
            {/* END ICON SECTION */}

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
                <CActionIconButton
                  icon="ep:close-bold"
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
