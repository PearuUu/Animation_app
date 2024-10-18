import React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  title?: string;
}

const PropertyInput: React.FC<Props> = ({
  value,
  onChange,
  min = 0,
  max = 500,
  step = 1,
  title = "",
}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
    
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <span className="text-md ">{title}</span>
      <div className="flex gap-3 items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          className="range w-3/4"
          onChange={handleInputChange}
        />
        <input
          type="number"
          value={value}
          step={step}
          onChange={handleInputChange}
          className="input input-bordered w-1/4 h-10"
        />
      </div>
    </div>
  );
};

export default PropertyInput;
