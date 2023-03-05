import { useState, useEffect, useRef } from "react";
import "./RangeSlider.css";
export default function RangeSlider({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
  className,
}) {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (maxValue - parseInt(e.target.value) >= priceCap ) {
        setMinValue(parseInt(e.target.value));
    }
  };

  const handleMax = (e) => {
    if (parseInt(e.target.value) - minValue >= priceCap) {
        setMaxValue(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * 100 + "%";
    progressRef.current.style.right = 100 - (maxValue / max) * 100 + "%";
  }, [minValue, maxValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <div className="slider relative h-3 rounded-md bg-secondary-100">
          <div
            className="progress absolute h-3 bg-accent-400 rounded-md "
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min  absolute w-full -top-2  h-1  appearance-none"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max absolute  w-full -top-2  h-1 appearance-none"
          />
        </div>
      </div>
      <p className="font-medium mt-4">
        Minimum: <span className="font-semibold ">{minValue}$</span>
      </p>
      <p className="font-medium ">
        Maximum: <span className="font-semibold ">{maxValue}$</span>
      </p>
    </div>
  );
}
