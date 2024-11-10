import { useEffect, useState } from "react";
import BaseAnimationLayout from "../../../layouts/BaseAnimationLayout";
import { animated, config, useSpring, useTrail } from "react-spring";


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
    <div className="border-4  border-primary bg-transparent w-full h-32 rounded-lg flex justify-center items-center">
      <animated.div
        style={styles}
        className="w-full h-full bg-secondary rounded-sm flex items-center justify-center"
      ></animated.div>
      <span className="font-bold text-lg text-white absolute">{progress}%</span>
    </div>
  );
}

const ProgressBar2 = () => {
  const [segments] = useState(
    Array.from({ length: Math.floor(100) }, (_, i) => i)
  );

  const trail = useTrail(segments.length, {
    from: { height: "5%" },
    to: { height: "80%" },
    config: { ...config.wobbly, mass: 5, tension: 200 },
    loop: true,
   
  });

  return (
    <div className="border-4 border-primary bg-transparent w-full h-32 rounded-lg flex items-center gap-1 justify-center">
      {trail.map((style, index) => (
        <animated.div
          style={style}
          key={index}
          className="w-[1%] bg-secondary flex items-center justify-center"
        >
          &nbsp;
        </animated.div>
      ))}
      
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
        <ProgressBar2 />
        <div className="w-3/4 h-full flex flex-col">
          <span className="text-2xl font-bold">Opis</span>
          <span className="text-xl font-semibold mt-4">Kiedy stosować</span>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Podczas dłużej trwających operacji, takich jak pobieranie,
              przetwarzanie danych, ładowanie zawartości strony lub aplikacji,
              aby użytkownik widział, że proces jest aktywny.
            </li>
            <li>
              W przypadku etapowych procesów, np. rejestracji czy konfiguracji,
              gdzie progress bar może pokazywać procent ukończenia lub kolejne
              kroki.
            </li>
            <li>
              Kiedy chcesz poprawić transparentność i komfort użytkownika, dając
              mu kontrolę nad czasem oczekiwania.
            </li>
          </ul>

          <span className="text-xl font-semibold">Jak stosować</span>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Animację progresu najlepiej wywołać na początku procesu, np. w
              momencie rozpoczęcia ładowania, i stopniowo zwiększać długość
              paska, w miarę jak operacja postępuje.
            </li>
            <li>
              Jeśli czas trwania procesu jest nieznany, można zastosować
              animację "nieokreślonego progresu" (np. przesuwającego się paska),
              która informuje użytkownika o aktywności bez podawania konkretnego
              czasu.
            </li>
            <li>
              Użyj płynnego przejścia i delikatnych efektów, aby wskazać wzrost
              postępu, unikając nagłych skoków.
            </li>
          </ul>
        </div>
      </div>
    </BaseAnimationLayout>
  );
}
