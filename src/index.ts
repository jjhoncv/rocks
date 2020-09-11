var keyboard = Keyboard();
keyboard.init();

function Vector(x, y) {
  return {
    x,
    y,
  };
}

const Bullet = (x, y) => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  var y = y;
  var x = x;

  const update = () => {
    if (keyboard.SPACE()) {
      y--;
    }
  };

  const draw = () => {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, 50);
    context.stroke();
  };

  return {
    draw,
    update,
  };
};

const Player = (x, y) => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const radio = 20;
  const width = radio * 2;
  var defaults = {
    x,
    y,
  };

  var x = defaults.x;
  var y = defaults.y;
  var angle = 0;
  var velocity = 0;
  var aceleration = 1;

  const update = () => {
    if (keyboard.LEFT()) {
      if (angle <= 0) {
        angle = 0;
      } else {
        angle = angle - 1 * velocity;
      }
    }
    if (keyboard.RIGHT()) {
      if (angle >= 360) {
        angle = 360;
      } else {
        angle = angle + 1 * velocity;
      }
    }
    if (keyboard.DOWN()) {
      velocity--;
    }
    if (keyboard.UP()) {
      velocity++;
    }
  };

  const draw = () => {
    context.save();
    context.translate(x, y);
    context.rotate((angle * Math.PI) / 180);

    context.beginPath();
    context.arc(0, -radio, 5, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(0, 0, radio, 0, 2 * Math.PI);

    context.restore();
  };

  return {
    draw,
    update,
  };
};

function GameState() {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  var player1;

  const init = () => {
    player1 = Player(100, 100);
  };
  const update = () => {
    player1.update();
  };
  const draw = () => {
    player1.draw();
  };
  init();
  return {
    draw,
    update,
  };
}

function Keyboard() {
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
}

window.onload = () => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  const game = GameState();

  (function draw() {
    window.requestAnimationFrame(draw);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.rect(0, 0, 300, 300);
    context.stroke();

    keyboard.update();
    game.update();
    game.draw();
  })();
};
