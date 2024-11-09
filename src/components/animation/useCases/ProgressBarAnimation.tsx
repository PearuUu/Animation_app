import React, { useEffect, useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { animated, config, useSpring, useSprings, useTrail, useTransition } from "react-spring";
import { MdHeight } from "react-icons/md";

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

const ProgressBar2 = ({ progress }: { progress: number }) => {
  const [segments, setSegments] = useState(
    Array.from({ length: Math.floor(progress / 5) }, (_, i) => i)
  );

  const trail = useTrail(segments.length, {
    from: { height: "5%" },
    to: { height: "80%" },
    config: {...config.wobbly, friction: 10},
    loop: true,
  });

  useEffect(() => {
    setSegments(Array.from({ length: Math.floor(progress / 5) }, (_, i) => i));
  }, [progress]);

  return (
    <div className="border-4 border-primary bg-transparent w-full h-1/5 rounded-lg flex items-center gap-1 justify-center">
      {trail.map((style, index) => (
        <animated.div
          style={style}
          key={index}
          className="w-[4.25%] bg-secondary flex items-center justify-center"
        >
          &nbsp;
        </animated.div>
      ))}
      <span className="font-bold text-lg text-white absolute">{progress}%</span>
    </div>
  );
};


export default function ProgressBarAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BaseAnimationLayout title="Progress bar animation">
      <div className="flex flex-col w-full h-full justify-center gap-8">
        <ProgressBar progress={progress} />
        <ProgressBar2 progress={progress} />
      </div>
    </BaseAnimationLayout>
  );
}
