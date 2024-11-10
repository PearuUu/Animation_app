import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxAnimation() {
  return (
    <div
      className="flex flex-col gap-3 bg-base-300 p-10 rounded-xl select-none"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <span className="font-semibold text-xl text-secondary">Parallax</span>
      <div className="w-full h-full">
        <Parallax pages={4} className="!h-full !w-full !relative">
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ backgroundColor: "#ff6d6d" }}
          >
            <div className="h-full flex items-center justify-center">
              <h1 className="text-white text-4xl">Layer 1</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={-0.3}
            style={{ backgroundColor: "#4d4dff", opacity: 0.7 }}
          >
            <div className="h-full flex items-center justify-center">
              <h1 className="text-white text-4xl">Layer 2</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.2}
          >
            <div className="h-full flex items-center justify-center bg-primary">
              <h1 className="text-white text-4xl">Layer 3</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.3}
            style={{ backgroundColor: "#4d4dff" }}
          >
            <div className="h-full flex items-center justify-center bg-accent">
              <h1 className="text-white text-4xl">Layer 4</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={-1.5}>
            <div className="h-1/4 w-1/4 bg-secondary flex justify-center items-center rounded-xl    ">
              <span className="font-bold text-white text-xl">Floating</span>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
