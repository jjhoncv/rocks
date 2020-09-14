export const Keyboard = () => {
  var keys = {};
  var UP, LEFT, RIGHT, DOWN, SPACE;

  const init = () => {
    window.addEventListener(
      "keydown",
      (e) => {
        keys[e.keyCode] = true;
      },
      false
    );
    window.addEventListener(
      "keyup",
      (e) => {
        keys[e.keyCode] = false;
      },
      false
    );
  };
  const update = () => {
    SPACE = keys[32];
    UP = keys[38];
    LEFT = keys[37];
    RIGHT = keys[39];
    DOWN = keys[40];
  };

  return {
    update,
    init,
    UP: () => UP,
    LEFT: () => LEFT,
    RIGHT: () => RIGHT,
    DOWN: () => DOWN,
    SPACE: () => SPACE,
  };
};

export const keyboard = {
  init: () => {
    (window as any).keyboard = Keyboard();
    (window as any).keyboard.init();
  },
  update: () => (window as any).keyboard.update(),
};

export const keys = {
  LEFT: () => (window as any).keyboard.LEFT(),
  RIGHT: () => (window as any).keyboard.RIGHT(),
  DOWN: () => (window as any).keyboard.DOWN(),
  UP: () => (window as any).keyboard.UP(),
  SPACE: () => (window as any).keyboard.SPACE(),
};
