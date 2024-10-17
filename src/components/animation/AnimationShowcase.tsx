import React, { useState } from "react";
import { useSpring, animated, ControllerUpdate } from "@react-spring/web";
import PropertyInput from "./PropertySlider";
import Button, { ButtonType } from "../common/Button";
import { CiPlay1 } from "react-icons/ci";
import { BiReset } from "react-icons/bi";

interface Props {
  title: string;
  animationConfig: ControllerUpdate;
}


type NestedObject = {
  [key: string]: number | NestedObject;
};

const AnimationShowcase: React.FC<Props> = ({ title, animationConfig }) => {
  const [config, setConfig] = useState<ControllerUpdate>(animationConfig)

  const [springs, api] = useSpring(() => config.from);


  const handleRun = () => {
    api.start(config as object);
  };

  const handleReset = () => {
    api.start({ from: { ...config.from } });
  }

  const handleReverse = () => {
    api.start({...config, from: { ...config.to }, to: { ...config.from } });
  }

  const handleInputChange = (path: string[], value: number) => {
    const newData = { ...config };
    let current: object | number = newData;



    for (let i = 0; i < path.length - 1; i++) {
      current = (current as NestedObject)[path[i]] as NestedObject;

    }

    (current as NestedObject)[path[path.length - 1]] = value;
    setConfig(newData);
    api.start({ from: { ...config.from } });
  };


  const renderInputs = (obj: ControllerUpdate, path: string[] = []) => {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === "number") {
        return (
          <div key={key} className="py-1 ml-10">
            
            <PropertyInput
              key={key}
              value={value}
              onChange={(value) => handleInputChange([...path, key], value)}
              min={0}
              max={500}
              step={1}
              title={key}
            />

          </div>
        );
      } else if (typeof value === "object") {
        return (
          <div key={key} className="ml-10">
            <span className="text-lg font-semibold">{key}</span>
            {renderInputs(value, [...path, key])}
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="flex flex-row gap-3">
      <div className="flex flex-col gap-5 w-1/2">
        <span className="font-semibold text-xl text-secondary">{title}</span>
        <div className="flex items-center h-full">
          <animated.div style={springs} className="size-40">
            <div className="size-full bg-secondary rounded-md flex items-center justify-center text-white font-bold">
              Animation
            </div>
          </animated.div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-3">
        <div className="flex flex-col w-full gap-3">{renderInputs(config)}</div>

        <div className="pt-5 flex gap-3 ml-10">
          <Button type={ButtonType.Primary} onClick={handleRun}>
            <CiPlay1 className="text-2xl" />
          </Button>

          <Button type={ButtonType.Secondary} onClick={handleReset}>
            <BiReset className="text-2xl" />
          </Button>

          <Button type={ButtonType.Accent} onClick={handleReverse}>
            <CiPlay1 className="text-2xl rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;
