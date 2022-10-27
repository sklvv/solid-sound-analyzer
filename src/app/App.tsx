import { createSignal, type Component } from "solid-js";
import { interpolateInferno, interpolateCool, interpolateRainbow } from "d3";

import { startFromFile } from "@/shared/utils/audioSource";
import { RadialGraph } from "@/features/player";
import { ColorSelect, currentInter } from "@/features/chooseColor";

const App: Component = () => {
  const [isPlaying, setIsPlaying] = createSignal<boolean>(false);

  const handlePlay = () => {
    const currentValue = isPlaying();
    setIsPlaying(!currentValue);
    startFromFile(isPlaying);
  };
  const handleStop = () => {
    setIsPlaying(false);
  };
  return (
    <div style="width: 100vw; height: 100vh; display:flex; align-items:center; justify-content:center">
      {isPlaying() ? (
        <>
          <svg
            onClick={handleStop}
            width="60%"
            height="60%"
            viewBox="-100 -100 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {currentInter() === "Inferno" ? (
              <RadialGraph color={interpolateInferno} scale={0.1} />
            ) : currentInter() === "Raindbow" ? (
              <RadialGraph color={interpolateRainbow} scale={0.1} />
            ) : (
              <RadialGraph color={interpolateCool} scale={0.1} />
            )}
          </svg>
          <ColorSelect />
        </>
      ) : (
        <h1
          class="cursor-pointer text-sm font-medium text-gray-700"
          onClick={handlePlay}
        >
          Start
        </h1>
      )}
    </div>
  );
};

export default App;
