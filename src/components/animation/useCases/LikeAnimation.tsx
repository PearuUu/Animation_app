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

  const scaleRef = useSpringRef();
  const scaleAnimation = useSpring({
    ref: scaleRef,
    from: { scale: 0, transform: "rotateZ(0deg)" },
    to: {
      scale: 2,
      transform: "rotate(360deg)",
    },
    config: config.wobbly,
    reset: true,
  });

  const transformRef = useSpringRef();
  const transformAnimation = useSpring({
    ref: transformRef,
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
      transformRef.start({ from: { y: 0 } });
      scaleRef.start({ from: { scale: 0, transform: "rotateZ(0deg)" } });
      setIsLiked(true);
    },
  });

  useChain(isLiked ? [scaleRef, transformRef] : [], [0, 0.5]);

  return (
    <BaseAnimationLayout title="Like Animation">
      <div
        {...gesture()}
        className="h-96 w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center"
      >
        <animated.div style={{ ...scaleAnimation, ...transformAnimation }}>
          <FaHeart className="text-4xl text-red-500" />
        </animated.div>
      </div>
      <div className="w-3/4 h-full flex flex-col">
        <span className="text-2xl font-bold">Opis</span>
        <span className="text-xl font-semibold mt-4">Kiedy stosować</span>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Przy interakcjach użytkownika, takich jak kliknięcie przycisku
            "polubienia" w aplikacjach społecznościowych lub produktach online.
          </li>
          <li>
            W sytuacjach, gdy chcemy wyróżnić pozytywne reakcje lub
            zaangażowanie użytkownika.
          </li>
          <li>
            W celu zwiększenia przyjemności z interakcji, zapewniając bardziej
            dynamiczne doświadczenie.
          </li>
        </ul>

        <span className="text-xl font-semibold">Jak stosować</span>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Animację najlepiej uruchomić po kliknięciu w ikonę polubienia,
            wykorzystując efekty takie jak powiększenie ikony, zmiana koloru lub
            rozbłysk, aby wizualnie zaakcentować reakcję.
          </li>
          <li>
            Ważne, aby animacja była szybka i płynna, nie zakłócając
            doświadczenia użytkownika, ale dodając przyjemny efekt wizualny.
          </li>
        </ul>
      </div>
    </BaseAnimationLayout>
  );
};

export default LikeAnimation;
