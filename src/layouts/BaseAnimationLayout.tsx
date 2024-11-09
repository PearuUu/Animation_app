import React, { ReactNode } from "react";

interface Props {
    title: string,
    children?: ReactNode, 
}

export default function BaseAnimationLayout(props: Props) {
  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-xl select-none min-h-96">
      <div className={`flex flex-col gap-5 w-full`}>
        <span className="font-semibold text-xl text-secondary">{props.title}</span>
        <div className="flex items-center justify-center h-full overflow-hidden gap-8">
            {props.children}
        </div>
      </div>
    </div>
  );
}
