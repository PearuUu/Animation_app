import { ReactNode } from "react";
import {  ControllerUpdate, Lookup, SpringRef } from "react-spring";
import PropertyEditor from "../components/animation/PropertyEditor";

interface Props {
  title: string;
  children: ReactNode;
  config: ControllerUpdate;
  onChange: (path: string[], value: number) => void;
  api: SpringRef<Lookup<unknown>>;
}

const AnimationLayout: React.FC<Props> = ({ title, children, config, onChange, api }) => {
  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-xl">
      <div className="flex flex-col gap-5 w-1/2">
        <span className="font-semibold text-xl text-secondary">{title}</span>
        <div className="flex items-center justify-center h-full overflow-hidden">
          {children}
        </div>
      </div>

      <PropertyEditor config={config} onChange={onChange} api={api} />
    </div>
  );
};

export default AnimationLayout;
