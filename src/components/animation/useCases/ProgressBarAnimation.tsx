import React, { useEffect, useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { animated, config, useSpring } from "react-spring";

// function ProgressBarAnimation(progress: number) {
//   const animation = useSpring({
//     from: { width: "0%" },
//     to: { width: "100%" },
//     config: { duration: 5000, ...config.wobbly },
//     onChange: ({value}) => {
//          const width = parseFloat(value.width).toFixed(2);
//          setProgress(width);
//     }
//   });

//   const waveMovement = useSpring({
//     loop: true,
//     from: { transform: "translateX(0px)" },
//     to: { transform: "translateX(30px)" },
//     config: { duration: 1500 },
//   });

//   return (
//     <BaseAnimationLayout title="Progress bar animation">
//       <div className="border-4  border-primary bg-transparent w-full h-1/5 rounded-lg flex justify-center items-center">
//         <animated.div
//           style={{...animation, ...waveMovement}}
//           className="w-full h-full bg-secondary rounded-sm flex items-center justify-center"
//         ></animated.div>
//         <span className="font-bold text-lg text-white absolute">
//           {progress}%
//         </span>
//       </div>
//     </BaseAnimationLayout>
//   );
// }

function ProgressBar({ progress }: { progress: number }) {
  const styles = useSpring({
    width: `${progress}%`,
    config: {
      tension: config.wobbly.tension,
      friction: 6,
    },
  });
  return (
    <div className="border-4  border-primary bg-transparent w-full h-1/5 rounded-lg flex justify-center items-center">
      <animated.div
        style={styles}
        className="w-full h-full bg-secondary rounded-sm flex items-center justify-center"
      ></animated.div>
      <span className="font-bold text-lg text-white absolute">{progress}%</span>
    </div>
  );
}

export default function ProgressBarAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <BaseAnimationLayout title="Progress bar animation">
      <ProgressBar progress={progress} />
    </BaseAnimationLayout>
  );
}
