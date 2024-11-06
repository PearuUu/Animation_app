import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
  config,
} from "@react-spring/web";
import { useState } from "react";

export default function ChainSwipeAnimation() {
  const [open, set] = useState(false);

  const data = [
    ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF"],
    ["#F5FF33", "#FF8633", "#33FFA6", "#FFA633", "#33A6FF"],
    ["#D1FF33", "#33FFD1", "#8633FF", "#33D1FF", "#FF33B2"],
    ["#33B2FF", "#FFD133", "#FF3386", "#86FF33", "#3386FF"],
    ["#FF3386", "#3386FF", "#FFD133", "#FFB233", "#33FFD1"],
  ];

  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    from: { size: "20%" },
    to: {
      size: open ? "100%" : "20%",
    },
  });

  const transRef = useSpringRef();
  const rowTransitions = data.map((row, rowIndex) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransition(open ? row : [], {
      ref: transRef,
      from: { x: 1000, scale: 0 },
      enter: { x: 0, scale: 1 },
      leave: { x: -1000, scale: 0 },
      config: config.gentle,
      trail: 150 + rowIndex,
    })
  );

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 1,
  ]);

  return (
    <div className="flex flex-row gap-3 bg-base-300 p-10 rounded-xl select-none h-screen">
      <div className={`flex flex-col gap-5 w-full`}>
        <span className="font-semibold text-xl text-secondary">
          Chain swipe
        </span>
        <div className="flex items-center justify-center h-full overflow-hidden">
          <animated.div
            className="flex flex-col space-y-4 p-4 items-center justify-center bg-neutral"
            style={{
              height: springs.size,
              width: springs.size,
            }}
            onClick={() => set(!open)}
          >
            {rowTransitions.map((transitions, rowIndex) => (
              <div key={rowIndex} className={`grid grid-cols-5 gap-y-2 gap-x-2`}>
                {transitions((style, item) => (
                  <animated.div
                    style={{
                      width: "120px",
                      height: "120px",
                      background: `${item}`,
                      ...style,
                    }}
                  />
                ))}
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </div>
  );
}
