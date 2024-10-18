import React, { useState } from "react";
import { useSpring, animated, ControllerUpdate } from "@react-spring/web";
import AnimationLayout from "../../layouts/AnimationLayout";

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
    <AnimationLayout title={title} config={config} onChange={handleInputChange} api={api}>
      <animated.div style={springs} className="size-40">
        <div className="size-full bg-secondary rounded-md flex items-center justify-center text-white font-bold"></div>
      </animated.div>
    </AnimationLayout>
  );
};

export default AnimationShowcase;
