import { Select, SelectItem } from "@/shared";
import { Component, createSignal } from "solid-js";

export const [currentInter, setInter] = createSignal<
  "Raindbow" | "Inferno" | "Cool" | string
>("Inferno");

const ColorSelect: Component = () => {
  const [isActive, setIsActive] = createSignal<boolean>(false);
  return (
    <Select
      title={`${currentInter()}`}
      isActive={isActive()}
      handleActive={(value) => setIsActive(value)}
    >
      <SelectItem
        text="Inferno"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setInter(text)}
      />
      <SelectItem
        text="Raindbow"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setInter(text)}
      />
      <SelectItem
        text="Cool"
        handleActive={(value) => setIsActive(value)}
        handleValue={(text) => setInter(text)}
      />
    </Select>
  );
};
export default ColorSelect;
