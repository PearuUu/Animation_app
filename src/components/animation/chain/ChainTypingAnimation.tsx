import { useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import {
  animated,
  config,
  useSpringRef,
  useChain,
  useTrail,
} from "@react-spring/web";
import { IoPlayOutline, IoRefreshSharp } from "react-icons/io5";
import Button, { ButtonType } from "../../common/Button";

export default function ChainTypingAnimation() {
  const [userInput, setUserInput] = useState("");

  const [data, setData] = useState<string[]>([]);

  const [open, set] = useState(false);

  const [isReverse, setReverse] = useState(false);

  const trailsRef = useSpringRef();
  const trails = useTrail(data.length, {
    ref: trailsRef,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: {
      tension: config.gentle.tension,
      friction: 15,
    },
    reverse: !open || isReverse,
    onRest: () => {
      setReverse(false);
    },
  });

  const [gridSize, setGridSize] = useState(0);

  const STROKE_WIDTH = 0.5;

  const OFFSET = STROKE_WIDTH / 2;

  const CELL_SIZE = 5;

  const MAX_WIDTH = CELL_SIZE * (gridSize - 1) + OFFSET * 2;
  const MAX_HEIGHT = (CELL_SIZE * (gridSize - 1) + OFFSET * 2) / 3.5;

  const gridApi = useSpringRef();

  const gridSprings = useTrail(gridSize, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
    reverse: !open,
  });

  useChain(open ? [gridApi, trailsRef] : [trailsRef, gridApi], [0, open ? 0 : -5]);

  function handlePlay() {
    set(true);
    if(gridSize == 0) setGridSize(32);
    if(userInput.length < data.length) setReverse(true);
    setData(userInput.split(""));
  }

  function handleReverse() {
    set(false);
  }

  return (
    <BaseAnimationLayout title="Typing animation">
      <div className="flex space-x-10 w-full h-full">
        <div className="flex flex-col w-1/4 h-full items-center justify-center">
          <input
            type="text"
            className="input input-bordered w-full block"
            placeholder="Type sth"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="pt-5 flex gap-3 ml-10">
            <Button type={ButtonType.Primary} onClick={() => handlePlay()}>
              <IoPlayOutline className="text-2xl font-extrabold" />
            </Button>

            <Button type={ButtonType.Secondary}>
              <IoRefreshSharp className="text-2xl scale-x-[-1]" />
            </Button>

            <Button type={ButtonType.Accent} onClick={() => handleReverse()}>
              <IoPlayOutline className="text-2xl rotate-180" />
            </Button>
          </div>
        </div>
        <div className="flex w-3/4 h-full space-y-1">
          <div className="flex flex-wrap h-fit w-fit text-primary">
            <div className="flex flex-wrap w-full h-fit space-x-3 space-y-1 z-10">
              {trails.map((style, index) => (
                <animated.span
                  style={style}
                  key={index}
                  className="text-2xl font-bold h-fit"
                >
                  {data[index]}
                </animated.span>
              ))}
            </div>

            <div className="w-[50vw] h-[25vw] absolute z-0">
              <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
                <g>
                  {gridSprings.map(({ x2 }, index) => (
                    <animated.line
                      x1={0}
                      y1={index * CELL_SIZE + OFFSET}
                      x2={x2}
                      y2={index * CELL_SIZE + OFFSET}
                      key={index}
                      strokeWidth={STROKE_WIDTH}
                      stroke="gray"
                    />
                  ))}
                  {gridSprings.map(({ y2 }, index) => (
                    <animated.line
                      x1={index * CELL_SIZE + OFFSET}
                      y1={0}
                      x2={index * CELL_SIZE + OFFSET}
                      y2={y2}
                      key={index}
                      strokeWidth={STROKE_WIDTH}
                      stroke="gray"
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </BaseAnimationLayout>
  );
}
