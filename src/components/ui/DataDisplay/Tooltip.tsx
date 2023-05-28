import React from "react";
type Position = "top" | "bottom";

interface TooltipType {
  children: React.ReactNode;
  label: string;
  position?: Position;
}

export const Tooltip = ({
  children,
  label,
  position = "bottom",
  ...rest
}: TooltipType) => {
  const positionHandler = (el: Position) => {
    return el === "top" ? "bottom-full" : "top-full";
  };

  return (
    <div {...rest} className="group w-fit relative">
      {children}
      <div
        className={`opacity-0 z-50 absolute ${positionHandler(
          position
        )} left-1/2 -translate-x-1/2 pt-1 pb-0.5 px-3 rounded-sm text-sm pointer-events-none bg-slate-800 text-slate-200 group-hover:opacity-100 duration-150`}
      >
        {label}
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";
