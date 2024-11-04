import { useGesture } from "react-use-gesture";
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

  const handleInputChange = (path: string[], value: number | string) => {
    helper.baseHandleInputChange(path, value, config, setConfig, api);
  };

  const bind = useGesture({
    onHover: ({ hovering }) => {
      api({
        scale: hovering ? 1.1 : 1,
      });
      setConfig({ ...config });
    },
    onDrag: ({ active, offset: [x, y] }) => {
      api({
        x: x,
        y: y,
        scale: active ? 1.3 : 1,
      });
      setConfig({ ...config, x: x, y: y });
    },
  });

  return (
    <AnimationLayout
      title="Drag"
      config={config}
      onChange={handleInputChange}
      api={api}
      spring={spring}
      bind={bind}
    >
      
    </AnimationLayout>
  );
};

export default DragAnimation;
