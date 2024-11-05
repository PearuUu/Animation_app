import { Component } from "react";
import IAnimationConfig from "../models/IAnimationConfig";
import BasePageLayout from "../layouts/BasePageLayout";
import DragAnimation from "../components/animation/Interactive/DragAnimation";
import HoverAnimation from "../components/animation/Interactive/HoverAnimation";
import DoubleClickAnimation from "../components/animation/Interactive/DoubleClickAnimation";
//import HoverAnimation from "../components/animation/Interactive/HoverAnimation";

export default class InteractiveAnimationsPage extends Component {
  animationConfigs: Array<IAnimationConfig> = [
    {
      title: "Drag",
      config: { x: 0, y: 0 },
    },
  ];
  render() {
    return (
      <BasePageLayout title="Gestures & Interactions">
          <DragAnimation />
          <HoverAnimation />
          <DoubleClickAnimation />
      </BasePageLayout>
    );
  }
}



