import React, { useState } from "react";
import { useSpring, animated, ControllerUpdate } from "@react-spring/web";
import PropertyEditor from "./PropertyEditor";

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


  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-btn">
      <div className="flex flex-col gap-5 w-1/2">
        <span className="font-semibold text-xl text-secondary">{title}</span>
        <div className="flex items-center h-full overflow-hidden">
          <animated.div style={springs} className="size-40">
            <div className="size-full bg-secondary rounded-md flex items-center justify-center text-white font-bold">
              Animation
            </div>
          </animated.div>
        </div>
      </div>

      <PropertyEditor config={config} onChange={handleInputChange} api={api} />
    </div>
  );
};

export default AnimationShowcase;
