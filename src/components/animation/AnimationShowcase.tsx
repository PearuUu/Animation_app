import React, { Component } from "react";

interface Props {
  title: string;
  animationProps?: object;
}

export default class AnimationShowcase extends Component<Props> {
  render() {
    const { title } = this.props;

    return (
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-lg">{title}</span>
        <div className="flex w-2/3 gap-3">
          <input
            type="range"
            min={0}
            max="100"
            defaultValue="40"
            className="range"
          />

          <span>Value</span>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="size-40 bg-secondary rounded-md flex items-center justify-center text-white font-bold">
            Animation
          </div>
          <button className="btn btn-primary  w-40">Run animation</button>
        </div>
      </div>
    );
  }
}
