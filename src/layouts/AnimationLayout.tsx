// AnimationLayout.tsx
import { ReactNode } from "react";
import { animated, ControllerUpdate, Lookup, SpringRef } from "react-spring";
import PropertyEditor from "../components/animation/PropertyEditor";
import { ReactEventHandlers } from "react-use-gesture/dist/types";

interface Props {
  title: string;
  children?: ReactNode;
  config: ControllerUpdate;
  onChange: (path: string[], value: number | string) => void;
  api?: SpringRef<Lookup<unknown>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spring: any;
  bind?: (...args: unknown[]) => ReactEventHandlers;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AnimationLayout: React.FC<Props> = ({
  title,
  children,
  config,
  onChange,
  api,
  spring,
  bind,
  onMouseEnter,
  onMouseLeave,
}) => {
  const hasBackgroundColor =
    config && config.from && config.from.backgroundColor;

  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-xl select-none min-h-96">
      <div className={`flex flex-col gap-5 ${api != undefined ? 'w-1/2' : 'w-full'}`}>
        <span className="font-semibold text-xl text-secondary">{title}</span>
        <div className="flex items-center justify-center h-full overflow-hidden">
          {children === undefined ? (
            <animated.div
              className={"size-40"}
              {...(bind ? bind() : {})}
              style={spring}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div
                className={`size-full ${
                  !hasBackgroundColor ? "bg-secondary" : ""
                } rounded-md flex items-center justify-center text-white font-bold`}
              >
                <span className="select-none">{title}</span>
              </div>
            </animated.div>
          ) : (
            children
          )}
        </div>
      </div>
      {api !== undefined && (
        <PropertyEditor config={config} onChange={onChange} api={api} />
      )}
    </div>
  );
};

export default AnimationLayout;
