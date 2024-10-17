import React, { Component } from "react";
import BasePageLayout from "../layouts/BasePageLayout";
import AnimationShowcase from "../components/animation/AnimationShowcase";
import { ControllerUpdate } from "react-spring";

interface Config{
  title: string,
  config: ControllerUpdate
}
 

export default class BasicTransitionsPage extends Component {
  animationConfigs: Array<Config> = [
    {
      title: "Transform",
      config: {
        to: { x: 500, y: 0 },
        from: { x: 0, y: 0 },
        config: {
          duration: 1000,
        },
      },
    },
    {
      title: "Fade-in/out",
      config: {
        from: { opacity: 0.1 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      },
    },
    {
      title: "Scale",
      config: {
        from: { scale: 0.5 },
        to: { scale: 1 },
        config: { duration: 1000 },
      },
    },
  ];

  render() {
    return (
      <BasePageLayout title="Basic Transitions">
        <div className="flex flex-col space-y-10">
          {this.animationConfigs.map((animation, index) => (
            <AnimationShowcase
              key={index}
              title={animation.title}
              animationConfig={animation.config}
            />
          ))}
        </div>
      </BasePageLayout>
    );
  }
}
