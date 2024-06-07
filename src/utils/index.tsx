import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const getPadding = (
  symbolLeft: string | undefined,
  symbolRight: string | undefined
) => {
  if (!symbolLeft && !symbolRight) return "p-2";

  const paddingY = "py-0.5 ";
  if (symbolLeft && symbolRight) return `${paddingY} px-1`;
  if (symbolLeft) return `${paddingY} pr-1.5 pl-1`;
  if (symbolRight) return `${paddingY} pr-1 pl-1.5`;
};
