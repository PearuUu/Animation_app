import React from "react";
import { ControllerUpdate } from "@react-spring/web";
import AnimationLayout from "../../layouts/AnimationLayout";
import AnimationHelper from "../../helpers/AnimationHelper";

interface Props {
  title: string;
  animationConfig: ControllerUpdate;
}

const AnimationShowcase: React.FC<Props> = ({ title, animationConfig }) => {
  const helper = new AnimationHelper();

  const { config, setConfig, spring, api } = helper.useAnimationSetup(animationConfig);

  const handleInputChange = (path: string[], value: number) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api, {
      from: { ...config.from },
    });
    
  };

  return (
    <AnimationLayout
      title={title}
      config={config}
      onChange={handleInputChange}
      api={api}
      spring={spring}
    >
    </AnimationLayout>
  );
};

export default AnimationShowcase;
