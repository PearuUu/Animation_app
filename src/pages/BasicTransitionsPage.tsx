import React, { Component } from "react";
import BasePageLayout from "../layouts/BasePageLayout";
import AnimationShowcase from "../components/animation/BasicAnimationShowcase";
import IAnimationConfig from "../models/IAnimationConfig";

 
export default class BasicTransitionsPage extends Component {
  animationConfigs: Array<IAnimationConfig> = [
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

          {this.animationConfigs.map((animation, index) => (
            <AnimationShowcase
              key={index}
              title={animation.title}
              animationConfig={animation.config}
            />
          ))}

      </BasePageLayout>
    );
  }
}
