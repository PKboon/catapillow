import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { SymbolButton } from "../Buttons/SymbolButton";
import { Symbol } from "../Symbols/Symbol";

const styles = cva([], {
  variants: { ctype: { default: [], success: [], danger: [] } },
  defaultVariants: { ctype: "default" },
});

const inputStyles = [
  "leading-none block pb-1 pt-3.5 px-0.5 w-full text-sm bg-transparent",
  "border-0 border-b appearance-none focus:outline-none focus:ring-0",
  "text-textLight dark:text-textDark",
  "focus:border-textLight peer dark:focus:border-textDark",
];

const labelStyles = [
  "absolute flex items-center gap-0.5 px-0.5 text-sm",
  "duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0]",
  "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0",
  "peer-focus:start-0 peer-focus:scale-75 peer-focus:-translate-y-5",
  "rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto",
];

type FieldProps = ComponentProps<"input"> &
  VariantProps<typeof styles> & {
    id: string;
    symbol?: string;
    footer?: string;
  };

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    {
      ctype,
      className,
      children,
      value,
      onChange,
      symbol,
      footer,
      id,
      ...props
    },
    ref
  ) => {
    const getInputStyles = () => {
      switch (ctype) {
        case "success":
          return {
            symbol: "material-symbols:check-circle-rounded",
            textColor: "text-success-600 dark:text-success-500",
            borderColor: "border-success-600 dark:border-success-500",
          };
        case "danger":
          return {
            symbol: "jam:close-circle-f",
            textColor: "text-danger-500 dark:text-danger-400",
            borderColor: "border-danger-500 dark:border-danger-400",
          };
        default:
          return {
            symbol: "",
            textColor: "text-textLight dark:text-textDark",
            borderColor: "border-[#B0B8C0] dark:border-[#787F86]",
          };
      }
    };

    const [inputType, setInputType] = useState(props.type);

    return (
      <div
        ref={ref}
        className={cn(styles({ ctype, className }), symbol ? `flex gap-1` : "")}
      >
        {symbol && (
          <div className="relative top-3 text-textLight dark:text-textDark">
            <Symbol symbol={symbol} size="lg" />
          </div>
        )}

        <div className="relative z-0">
          <input
            {...props}
            type={inputType}
            id={id}
            value={value}
            onChange={onChange}
            className={`${inputStyles.join(" ")} ${getInputStyles().borderColor}`}
            placeholder=" "
          />
          <label
            htmlFor={id}
            className={`${labelStyles.join(" ")} ${getInputStyles().textColor}`}
          >
            {children}
          </label>

          {props.type === "password" && (
            <div className="absolute top-3 -right-6">
              {inputType === "password" ? (
                <SymbolButton
                  symbol="el:eye-open"
                  tooltip="Show"
                  onClick={() => setInputType("text")}
                />
              ) : (
                <SymbolButton
                  symbol="el:eye-close"
                  tooltip="Hide"
                  onClick={() => setInputType("password")}
                />
              )}
            </div>
          )}

          {footer && (
            <div
              className={`${getInputStyles().textColor} flex gap-0.5 items-center text-xs mt-0.5 px-0.5`}
            >
              <Symbol
                className={`${getInputStyles().textColor}`}
                symbol={getInputStyles().symbol}
                size="md"
              />
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);
