import {
  createEffect,
  createSignal,
  Match,
  Switch,
  type Component,
} from "solid-js";
import { interpolateInferno, interpolateCool, interpolateRainbow } from "d3";

import { ColorSelect, currentInter } from "@/features/chooseColor";
import { RadialGraph, startFromFile } from "@/entities/player";
import { SongSelect, track } from "@/features/chooseSong";

export const [isPlaying, setIsPlaying] = createSignal<boolean>(false);
const App: Component = () => {
  createEffect((prev) => {
    if (prev !== track()) {
      startFromFile(isPlaying, track);
    }
  });

  const handlePlay = () => {
    const currentValue = isPlaying();
    setIsPlaying(!currentValue);
    startFromFile(isPlaying, track);
  };

  return (
    <div class="w-screen h-screen flex items-center justify-center">
      <Switch>
        <Match when={isPlaying() === false}>
          <h1
            class="cursor-pointer text-sm font-medium text-green-400"
            onClick={handlePlay}
          >
            Start
          </h1>
        </Match>
        <Match when={isPlaying()}>
          <svg
            width="60%"
            height="60%"
            viewBox="-100 -100 200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <Switch>
              <Match when={currentInter() === "Inferno"}>
                <RadialGraph color={interpolateInferno} scale={0.1} />
              </Match>
              <Match when={currentInter() === "Raindbow"}>
                <RadialGraph color={interpolateRainbow} scale={0.1} />
              </Match>
              <Match when={currentInter() === "Cool"}>
                <RadialGraph color={interpolateCool} scale={0.1} />
              </Match>
            </Switch>
          </svg>
          <div class="flex flex-col h-20 justify-between">
            <SongSelect />
            <ColorSelect />
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default App;
