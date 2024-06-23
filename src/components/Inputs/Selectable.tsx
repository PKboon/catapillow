import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const styles = cva([
  "flex gap-1.5 items-start text-sm",
  "text-textLight dark:text-textDark",
]);

const inputStyles = [
  "appearance-none -mt-[1px] h-4 bg-transparent",
  "border border-solid border-slate-400 outline-none",
  "checked:bg-primaryLight-500 dark:checked:bg-primaryDark-500",
  "checked:border-primaryLight-500 dark:checked:border-primaryDark-500",
  "checked:focus:border-primaryLight-500",
  "checked:after:bg-bgPrimaryLight dark:checked:after:bg-bgPrimaryDark",
  "checked:after:absolute",
  "disabled:opacity-60",
  "focus:shadow-none focus:outline-none",
  "focus:ring-4 focus:ring-slate-400/30 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
  "focus:checked:ring-primaryLight-500/30 dark:focus:checked:ring-primaryDark-500/40 focus:checked:ring-offset-white dark:focus:checked:ring-offset-black",
  "hover:cursor-pointer",
];

type SelectableProps = ComponentProps<"input"> &
  VariantProps<typeof styles> & {
    id: string;
  };

export const Selectable = forwardRef<HTMLInputElement, SelectableProps>(
  ({ className, children, id, type = "radio", ...props }, ref) => {
    return (
      <div ref={ref} className={cn(styles({ className }))}>
        {type === "switch" && (
          <input
            className={`
              ${inputStyles.join(" ")}
              w-7 rounded-full
              after:absolute after:z-[2]
              after:mt-[2px] after:left-[13px]
              after:h-[10px] after:w-[10px]
              after:rounded-full after:border-none 
              after:bg-slate-400 after:transition-[background-color_0.2s,transform_0.2s] after:content-['']
              checked:after:z-[2]
              checked:after:mt-[2px] checked:after:left-[25px]
              checked:after:h-[10px]checked:after:w-[10px]
              checked:after:rounded-full checked:after:border-none
              checked:after:bg-primaryBgLight checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']
            `}
            type="checkbox"
            role="switch"
            id={id}
            {...props}
          />
        )}

        {type === "radio" && (
          <input
            id={id}
            type="radio"
            className={`
              ${inputStyles.join(" ")}
              -ms-[1.5rem] w-4 rounded-full
              after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-['']
              checked:after:ms-[7px] checked:after:mt-[7px]
              checked:after:h-[0.5rem] checked:after:w-[0.5rem]
              checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)]
            `}
            {...props}
          />
        )}

        {type === "checkbox" && (
          <input
            id={id}
            type="checkbox"
            className={`
              ${inputStyles.join(" ")}
              -ms-[1.5rem] w-4 rounded
              checked:after:block
              checked:after:ms-[0.25rem]
              checked:after:h-[0.65rem] checked:after:w-[0.35rem] checked:after:rotate-45 checked:after:border-[.18rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-bgPrimaryLight dark:checked:after:border-bgPrimaryDark checked:after:bg-transparent dark:checked:after:bg-primaryDark-500 checked:after:content-['']
              focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded focus:after:content-['']
              checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.65rem] checked:focus:after:w-[0.35rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-bgPrimaryLight dark:checked:focus:after:border-bgPrimaryDark checked:focus:after:bg-transparent
            `}
            {...props}
          />
        )}

        <label
          htmlFor={id}
          className={`-mt-[.2rem] cursor-pointer dark:font-medium ${props.disabled && "opacity-60"}`}
        >
          {children}
        </label>
      </div>
    );
  }
);
