import { Component, createSignal } from "solid-js";

export const [currentInter, setInter] = createSignal<
  "Raindbow" | "Inferno" | "Cool"
>("Inferno");

const ColorSelect: Component = () => {
  const [isActive, setIsActive] = createSignal<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive());
  };
  return (
    <div class="relative inline-block text-left">
      <div onclick={handleClick}>
        <button
          type="button"
          class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {currentInter()}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isActive() && (
        <div
          class="transition ease-out duration-100 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <span
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              onClick={() => {
                setInter("Raindbow");
                setIsActive(false);
              }}
            >
              Raindbow
            </span>
            <span
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              onClick={() => {
                setInter("Inferno");
                setIsActive(false);
              }}
            >
              Inferno
            </span>
            <span
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              onClick={() => {
                setInter("Cool");
                setIsActive(false);
              }}
            >
              Cool
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ColorSelect;
