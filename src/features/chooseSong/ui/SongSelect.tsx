import { Select, SelectItem } from "@/shared";
import { Component, createSignal } from "solid-js";

export const [track, setTrack] = createSignal<string>("Karelia");

const SongSelect: Component = () => {
  const [isActive, setIsActive] = createSignal<boolean>(false);

  return (
    <Select
      title={`${track()}`}
      isActive={isActive()}
      handleActive={(value) => setIsActive(value)}
    >
      <SelectItem
        text="Karelia"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setTrack(text)}
      />

      <SelectItem
        text="Rainy"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setTrack(text)}
      />

      <SelectItem
        text="Split"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setTrack(text)}
      />
    </Select>
  );
};
export default SongSelect;
