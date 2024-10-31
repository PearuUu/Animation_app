import AnimationLayout from "../../../layouts/AnimationLayout";
import IAnimationConfig from "../../../models/IAnimationConfig";
import AnimationHelper from "../../../helpers/AnimationHelper";

export default function HoverAnimation() {
  const animConfig: IAnimationConfig = {
    title: "Hover",
    config: {
      from: { backgroundColor: "#2cc9b7", scale: 1, opacity: 1 },
      to: { backgroundColor: "#6a73E5", scale: 1.5, opacity: 1 },
      config: {
        duration: 200,
      },
    },
  };

  const helper = new AnimationHelper();

  const { config, setConfig, spring, api } = helper.useAnimationSetup(
    animConfig.config
  );

  const handleInputChange = (path: string[], value: number | string) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api, {from: config.from});
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered");
    api.start(config);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    api.start({...config, reverse: true});
  };

  return (
    <AnimationLayout
      title="Hover"
      api={api}
      config={config}
      spring={spring}
      onChange={handleInputChange}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></AnimationLayout>
  );
}
