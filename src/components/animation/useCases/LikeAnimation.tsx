import React, { useState } from "react";
import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import { useGesture } from "react-use-gesture";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { FaHeart } from "react-icons/fa";

const LikeAnimation = () => {
  const [isLiked, setIsLiked] = useState(false);

  const ref1 = useSpringRef();
  const animation = useSpring({
    ref: ref1,
    from: { scale: 0, transform: "rotateZ(0deg)" },
    to: {
      scale: 2,
      transform: "rotate(360deg)",
    },
    config: config.wobbly,
    reset: true,
  });

  const ref2 = useSpringRef();
  const animation2 = useSpring({
    ref: ref2,
    from: { y: 0 },
    to: {
      y: -250,
    },
    config: config.wobbly,
    reset: true,
    onRest: () => {
      setIsLiked(false);
    },
  });

  const gesture = useGesture({
    onDoubleClick: () => {
      console.log("double click");
      ref2.start({ from: { y: 0 } });
      ref1.start({ from: { scale: 0, transform: "rotateZ(0deg)" } });
      setIsLiked(true);
    },
  });

  useChain(isLiked ? [ref1, ref2] : [], [0, 0.5]);

  return (
    <BaseAnimationLayout title="Like Animation">
      <div
        {...gesture()}
        className="h-96 w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
      >
        <animated.div style={{ ...animation, ...animation2 }}>
          <FaHeart className="text-4xl text-red-500" />
        </animated.div>
      </div>
    </BaseAnimationLayout>
  );
};

export default LikeAnimation;
