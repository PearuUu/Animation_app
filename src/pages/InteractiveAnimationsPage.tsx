import { Component } from "react";
import IAnimationConfig from "../models/IAnimationConfig";
import BasePageLayout from "../layouts/BasePageLayout";
import DragAnimation from "../components/animation/Interactive/DragAnimation";

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
        <div className="flex flex-col space-y-10 w-full">
          <DragAnimation />
          <DragAnimation />
        </div>
      </BasePageLayout>
    );
  }
}



