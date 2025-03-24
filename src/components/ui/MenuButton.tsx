import { useRef, useState } from "react";

enum MenuButtonState {
  OPEN = "open",
  CLOSED = "closed",
}

const CONFIG = {
  WIDTH: 50,
  HEIGHT: 50,
  BAR_HEIGHT: 2,
  TIME_BUTTON_DISABLED: 700,
};

const MenuButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<MenuButtonState>(MenuButtonState.CLOSED);

  const changeState = () => {
    const button = buttonRef.current;
    if (!button) return;
    button.disabled = true;
    setState((prev) =>
      prev === MenuButtonState.CLOSED
        ? MenuButtonState.OPEN
        : MenuButtonState.CLOSED
    );
    setTimeout(() => {
      button.disabled = false;
    }, CONFIG.TIME_BUTTON_DISABLED);
  };

  return (
    <button ref={buttonRef} onClick={changeState} className="relative">
      <div
        style={{ width: CONFIG.WIDTH, height: CONFIG.HEIGHT }}
        className={`relative flex overflow-hidden items-center justify-center rounded-full transform transition-all bg-sun-700 ring-0 ring-gray-300 hover:ring-8 ${
          state === MenuButtonState.OPEN && "ring-4!"
        } ring-opacity-30 duration-200 shadow-md`}
      >
        <div
          style={{ width: CONFIG.WIDTH - 30, height: CONFIG.HEIGHT - 32 }}
          className={`flex flex-col justify-between transform transition-all duration-300 origin-center overflow-hidden`}
        >
          {/* Три полоски */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              style={{ height: CONFIG.BAR_HEIGHT }}
              className={`bg-white w-7 transform transition-all duration-300 delay-100 ${
                state === MenuButtonState.OPEN && "translate-y-6"
              } `}
            ></div>
          ))}

          {/* Иконка X */}
          <div
            style={{ top: (CONFIG.BAR_HEIGHT * 4) + 0.5 }}
            className={`absolute items-center justify-between transform transition-all duration-500 -translate-x-10 ${
              state === MenuButtonState.OPEN && "translate-x-0 w-12"
            } flex w-0`}
          >
            <div
              style={{ height: CONFIG.BAR_HEIGHT, width: CONFIG.WIDTH - 30 }}
              className={`absolute bg-white transform transition-all duration-500 rotate-0 delay-300 ${
                state === MenuButtonState.OPEN && "rotate-45"
              }`}
            ></div>
            <div
              style={{ height: CONFIG.BAR_HEIGHT, width: CONFIG.WIDTH - 30 }}
              className={`absolute bg-white transform transition-all duration-500 -rotate-0 delay-300 ${
                state === MenuButtonState.OPEN && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
