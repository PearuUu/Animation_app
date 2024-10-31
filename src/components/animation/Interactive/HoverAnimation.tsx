// import React, { useState } from "react";
// import AnimationLayout from "../../../layouts/AnimationLayout";
// import IAnimationConfig from "../../../models/IAnimationConfig";
// import { ControllerUpdate, useSpring } from "react-spring";

// export default function HoverAnimation() {
//   const animConfig: IAnimationConfig = {
//     title: "Hover",
//     config: {
//       x: 0,
//       y: 0,
//       config: {
//         mass: 1,
//         tension: 170,
//         friction: 26,
//         precision: 0.1,
//       },
//     },
//   };

//   const [config, setConfig] = useState<ControllerUpdate>(animConfig.config);

//   const [spring, api] = useSpring(() => config);



//   return <AnimationLayout 
//   title="Hover"
//   api={api}
//   config={config}
//   spring={spring}
  
//   >
//   </AnimationLayout>;
// }

