import IAnimationConfig from "../../../models/IAnimationConfig";
import AnimationHelper from "../../../helpers/AnimationHelper";
import { useGesture } from "react-use-gesture";
import AnimationLayout from "../../../layouts/AnimationLayout";
import { useState } from "react";

export default function DoubleClickAnimation() {
  const animConfig: IAnimationConfig = {
    title: "DoubleClick",
    config: {
      from: { transform: "scale(0)" },
      to: { transform: "scale(1.2)" },
      config: {
        tension: 200,
        friction: 10,
      },
    },
  };

  const helper = new AnimationHelper();

  const { config, setConfig, spring, api } = helper.useAnimationSetup(
    animConfig.config
  );

  const handleInputChange = (path: string[], value: number | string) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api, {
      from: config.from,
    });
  };

  const [isFinished, setIsFinished] = useState(false);

  const bind = useGesture({
    onDoubleClick: () => {
      api({ ...config, reverse: isFinished, onRest: () => setIsFinished(!isFinished) });
    },
  });

  return (
    <div {...bind()}>
      <AnimationLayout
        title={animConfig.title}
        config={config}
        onChange={handleInputChange}
        api={api}
        spring={spring}
      ></AnimationLayout>
    </div>
  );
}
