import React, { Component } from "react";
import BasePageLayout from "../layouts/BasePageLayout";
import AnimationShowcase from "../components/animation/AnimationShowcase";
 

export default class BasicTransitionsPage extends Component {
  animationConfig = {
    to: { x: 500 },
    from: { x: 0, y: 0 },
    config: {
      duration: 1000,
    },
  };


  render() {
    return (
      <BasePageLayout title="Basic Transitions">
        <AnimationShowcase
          title="Transform"
          animationConfig={this.animationConfig}
        />
      </BasePageLayout>
    );
  }
}
