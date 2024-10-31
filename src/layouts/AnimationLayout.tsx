import {  ReactNode } from "react";
import {  animated, ControllerUpdate, Lookup, SpringRef } from "react-spring";
import PropertyEditor from "../components/animation/PropertyEditor";
import { ReactEventHandlers } from "react-use-gesture/dist/types";

interface Props {
  title: string;
  children?: ReactNode;
  config: ControllerUpdate;
  onChange: (path: string[], value: number) => void;
  api: SpringRef<Lookup<unknown>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spring: any;
  bind?: (...args: unknown[]) => ReactEventHandlers;
}

const AnimationLayout: React.FC<Props> = ({ title, children, config, onChange, api, spring, bind }) => {
  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-xl">
      <div className="flex flex-col gap-5 w-1/2">
        <span className="font-semibold text-xl text-secondary">{title}</span>
        <div className="flex items-center justify-center h-full overflow-hidden">
          <animated.div className={"size-40"} {...(bind ? bind() : {})} style={spring}>
            <div className="size-full bg-secondary rounded-md flex items-center justify-center text-white font-bold">
              <span className="select-none">{title}</span>
            </div>
          </animated.div>
          {children}
        </div>
      </div>

      <PropertyEditor config={config} onChange={onChange} api={api} />
    </div>
  );
};

export default AnimationLayout;
