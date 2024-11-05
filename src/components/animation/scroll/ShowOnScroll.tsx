import React from "react";
import AnimationHelper from "../../../helpers/AnimationHelper";
import IAnimationConfig from "../../../models/IAnimationConfig";
import AnimationLayout from "../../../layouts/AnimationLayout";
import { animated, useInView } from "react-spring";

export default function FadeInAnimation() {
  const animConfig: IAnimationConfig = {
    title: "Fade-in/out",
    config: {
      from: { transform: "scale(0)" },
      to: { transform: "scale(1.2)" },
      config: {
        tension: 200,
        friction: 10,
      },
    },
  };

  let [ref, viewSpring] = useInView(
    () => ({...animConfig.config}),{ rootMargin: "0px 0px" }
  );

  const helper = new AnimationHelper();

  const { config, setConfig, spring, api } = helper.useAnimationSetup(
    animConfig.config
  );

  const handleInputChange = (path: string[], value: number | string) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api);
    viewSpring = spring;
  };

  return (
    <AnimationLayout
      title="Show on scroll"
      config={config}
      onChange={handleInputChange}
      spring={viewSpring}
    >
      <animated.div className={"size-40"} style={viewSpring} ref={ref}>
        <div
          className={`size-full bg-secondary rounded-md flex items-center justify-center text-white font-bold`}
        >
          <span className="select-none">Show</span>
        </div>
      </animated.div>
    </AnimationLayout>
  );
}
