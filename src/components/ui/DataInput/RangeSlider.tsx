import React, { useState, useEffect, useRef } from "react";
import { Typography } from "../Typo";

interface RangeSliderType extends React.ComponentPropsWithRef<"div"> {
  initialValue: number;
  className?: string;
  minValue: number;
  maxValue: number;
  selectedValue: (e: number) => void;
}

export const RangeSlider = ({
  minValue,
  initialValue,
  className,
  maxValue,
  selectedValue,
  ...rest
}: RangeSliderType) => {
  const [finalValue, setfinalValue] = useState<number>(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const [sliderCoordinate, setsliderCoordinate] = useState({
    width: 131,
    left: initialValue,
  });
  const mouseUpHandler = (e: any) => {
    selectedValue(e.target.value);
  };
  const changeRangeHandler = (e: any) => {
    const coordinate = e.target.getBoundingClientRect();
    setsliderCoordinate({
      width: coordinate.width,
      left:
        ((e.target.value - minValue) * coordinate.width) /
        (maxValue - minValue),
    });

    setfinalValue(+e.target.value);
  };
  useEffect(() => {
    if (inputRef && inputRef.current) {
      const curr = inputRef.current?.getBoundingClientRect();
      setsliderCoordinate({
        width: curr.width,
        left: ((initialValue - minValue) * curr.width) / (maxValue - minValue),
      });
    }
  }, [initialValue, minValue, maxValue]);

  return (
    <div className=" w-52 relative " {...rest}>
      <input
        ref={inputRef}
        type="range"
        min={minValue}
        max={maxValue}
        defaultValue={initialValue || (maxValue - minValue) / 2}
        onChange={changeRangeHandler}
        // value={rangeValue}
        className="appearance-none w-full h-3 border rounded-md duration-200 bg-sky-100  cursor-pointer outline-none"
        onMouseUp={mouseUpHandler}
      />
      <Typography
        className="absolute right-full px-1 top-0 text-mini "
        variant="small"
        colorVariant="info"
      >
        {minValue.toLocaleString()}
      </Typography>
      <span
        className="absolute -top-6 text-mini px-1 bg-sky-100 rounded-sm text-sky-600 -translate-x-1/2"
        style={{ left: sliderCoordinate.left + "px" }}
      >
        {finalValue.toLocaleString()}
      </span>
      <Typography
        className="absolute left-full px-1 top-0 text-mini "
        variant="small"
        colorVariant="info"
      >
        {maxValue.toLocaleString()}
      </Typography>
    </div>
  );
};

RangeSlider.displayName = RangeSlider;
