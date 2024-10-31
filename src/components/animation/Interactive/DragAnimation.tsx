import { useDrag } from "react-use-gesture";
import AnimationLayout from "../../../layouts/AnimationLayout";
import IAnimationConfig from "../../../models/IAnimationConfig";
import AnimationHelper from "../../../helpers/AnimationHelper";

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

  const helper = new AnimationHelper();

  const { config, setConfig, spring, api } = helper.useAnimationSetup(animConfig.config);

  const handleInputChange = (path: string[], value: number) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api);
  };

  const bindDrag = useDrag(({ offset }) => {
    api({
      x: offset[0],
      y: offset[1],
    });
    setConfig({ ...config, x: offset[0], y: offset[1] });
  });

  

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
