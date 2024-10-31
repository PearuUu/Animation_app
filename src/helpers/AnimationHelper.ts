/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { ControllerUpdate, Lookup, SpringRef, useSpring } from "react-spring";
import NestedObject from "../models/NestedObject";

export default class AnimationHelper {
  useAnimationSetup(animationConfig: ControllerUpdate) {
    const [config, setConfig] = useState<ControllerUpdate>(animationConfig);

    const [spring, api] = useSpring(() => config.from);

    return {
      config,
      setConfig,
      spring,
      api,
    };
  }

  baseHandleInputChange(
    path: string[],
    value: number | string,
    config: ControllerUpdate,
    setConfig: (value: React.SetStateAction<ControllerUpdate>) => void,
    api: SpringRef<Lookup<unknown>>,
    apiObj?: object
  ) {
    const newData = { ...config };
    let current: object | number = newData;

    for (let i = 0; i < path.length - 1; i++) {
      current = (current as NestedObject)[path[i]] as NestedObject;
    }

    (current as NestedObject)[path[path.length - 1]] = value;
    setConfig(newData);
    if (apiObj != null) api.start({ ...apiObj });
    else api.start({ ...config });
  }
}
