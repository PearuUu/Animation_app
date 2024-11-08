import React, { useEffect, useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { animated, useTransition, config } from "@react-spring/web";

export default function TypingAnimation() {
  const [userInput, setUserInput] = useState("");

  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(userInput.split(""));
    console.log(data)
  }, [userInput]);

  const transition = useTransition(data, {
    from: { opacity: 0, y: 200 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -200 },
    keys: data.map((_, index) => index),
    config: config.wobbly
  });

  return (
    <BaseAnimationLayout title="Typing animation">
      <div className="flex space-x-10 w-full h-full">
        <div className="flex w-1/4 h-full items-center justify-center">
          <input
            type="text"
            className="input input-bordered w-full block"
            placeholder="Type sth"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="flex w-3/4 h-full justify-center items-center space-y-1">
          <div className="flex flex-wrap h-fit">
            {transition((style, item) => (
              <animated.div style={style} className="text-2xl font-bold h-fit">
                {item}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </BaseAnimationLayout>
  );
}
