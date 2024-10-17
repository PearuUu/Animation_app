import React, { Component } from "react";
import BasePageLayout from "../layouts/BasePageLayout";
import AnimationShowcase from "../components/animation/AnimationShowcase";
import { ControllerUpdate } from "react-spring";
 

export default class BasicTransitionsPage extends Component {
  transformConfig: ControllerUpdate = {
    to: { x: 500 },
    from: { x: 0, y: 0 },
    config: {
      duration: 1000,
    },
  };

  fadeConfig: ControllerUpdate = {
    
  };

  render() {
    return (
      <BasePageLayout title="Basic Transitions">
        <AnimationShowcase
          title="Transform"
          animationConfig={this.transformConfig}
        />
      </BasePageLayout>
    );
  }
}
