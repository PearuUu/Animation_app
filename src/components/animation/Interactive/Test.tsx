import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
  config
} from "@react-spring/web";
import { useState } from "react";

export default function Test() {
  const [open, set] = useState(false);

  const data = [
    ["#FF5733", "#33FF57", "#3357FF"],
    ["#FF33A6", "#A633FF", "#33FFF5"],
    ["#F5FF33", "#FF8633", "#33FFA6"],
  ];

  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    from: { size: "20%" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transRef = useSpringRef();
  const rowTransitions = data.map((row, rowIndex) =>
    useTransition(open ? row : [], {
      ref: transRef,
      from: { y: -1000 },
      enter: { y: 0 },
      leave: { y: -1000 },
      config: config.gentle,
      trail: 200 + rowIndex,
    })
  );

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <animated.div
      className="grid grid-cols-1 gap-2 p-4"
      style={{
        height: springs.size,
        width: springs.size,
        background: "lightblue",
      }}
      onClick={() => set((open) => !open)}
    >
      {rowTransitions.map((transitions, rowIndex) => (
        <div key={rowIndex} className="flex space-x-2">
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
  );
}
