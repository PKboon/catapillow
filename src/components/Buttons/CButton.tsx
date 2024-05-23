import { ComponentProps } from "react";

type CButtonProps = ComponentProps<"button">;

export const CButton = ({ ...props }: CButtonProps) => {
  return (
    <button
      className="
        flex items-center shadow py-2 px-3 rounded-full font-semibold text-sm
        bg-pink-500 text-pink-50
      "
      {...props}
    >
      {props.children}
    </button>
  );
};
