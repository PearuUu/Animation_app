import React, { useEffect, useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { animated, useTransition, config } from "@react-spring/web";

export default function TypingAnimation() {
  const [userInput, setUserInput] = useState(
    `Animacja przy wpisywaniu tekstu przez użytkownika (tzw. typing effect) może być używana, aby stworzyć wrażenie, że tekst jest dynamicznie wprowadzany na stronie. Jest to szczególnie przydatne w formularzach, interaktywnych elementach UI lub przy wprowadzaniu danych, które mają przyciągnąć uwagę użytkownika lub ułatwić interakcję z formularzami. Tego typu animacja może być wykorzystana, aby wyświetlić postęp wpisywania, na przykład w polu do wpisania wiadomości lub komentarza, gdzie każda litera jest animowana i pojawia się w sposób płynny, zgodny z naturalnym procesem pisania. Tego typu efekty poprawiają wrażenie interaktywności, mogą sprawić, że proces wprowadzania danych będzie bardziej angażujący, a także dają użytkownikowi poczucie kontroli nad wprowadzaniem treści. Warto pamiętać, aby nie przesadzić z prędkością animacji, ponieważ zbyt szybkie lub zbyt wolne tempo może rozpraszać użytkownika lub powodować frustrację. Ponadto, animacje przy wpisywaniu powinny być stosowane tam, gdzie ich obecność ma sens, aby nie dodawały niepotrzebnego opóźnienia w interakcji.Takie animacje można stosować w aplikacjach do nauki języków lub w aplikacjach do nauki szybkiego pisania np duolingo, monkeytype.`
  );


  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    
    setData(userInput.split(""));
  }, [userInput]);

  const transition = useTransition(data, {
    from: { opacity: 0, y: 200 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -200 },
    keys: data.map((_, index) => index),
    trail: 2,

    config: config.wobbly
  });


  return (
    <BaseAnimationLayout title="Typing animation">
      <div className="flex space-x-10 w-full h-full">
        <div className="flex flex-col w-1/4 h-full items-center justify-center gap-2">
          <span className="justify-self-start self-start">Type something</span>
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
              <animated.div
                style={style}
                className="text-base font-bold h-fit"
              >
                {item === " " ? "\u00a0 " : item}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </BaseAnimationLayout>
  );
}
