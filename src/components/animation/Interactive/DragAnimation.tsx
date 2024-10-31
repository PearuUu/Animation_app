import { useState } from "react";
import { ControllerUpdate, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import AnimationLayout from "../../../layouts/AnimationLayout";
import IAnimationConfig from "../../../models/IAnimationConfig";
import NestedObject from "../../../models/NestedObject";

const DragAnimation = () => {
  const animConfig: IAnimationConfig = {
    title: "Drag",
    config: {
      x: 0,
      y: 0,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        precision: 0.1,
      },
    },
  };

  const [config, setConfig] = useState<ControllerUpdate>(animConfig.config);

  const [spring, api] = useSpring(() => config);

  const bindDrag = useDrag(({ offset }) => {
    api({
      x: offset[0],
      y: offset[1],
    });
    setConfig({ ...config, x: offset[0], y: offset[1] });
  });

  const handleInputChange = (path: string[], value: number) => {
    const newData = { ...config };
    let current: object | number = newData;

    for (let i = 0; i < path.length - 1; i++) {
      current = (current as NestedObject)[path[i]] as NestedObject;
    }

    (current as NestedObject)[path[path.length - 1]] = value;
    setConfig(newData);
    api({ ...config });
  };

  return (
    <AnimationLayout
      title="Drag"
      config={config}
      onChange={handleInputChange}
      api={api}
      spring={spring}
      bind={bindDrag}
    >
      
    </AnimationLayout>
  );
};

export default DragAnimation;
