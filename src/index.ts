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
    // console.log('y', y)
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

  var defaults = {
    x,
    y,
  };

  var x = defaults.x;
  var y = defaults.y;
  var angle = 0;

  const update = () => {
    if (keyboard.LEFT()) {
      angle--;
    }
    if (keyboard.RIGHT()) {
      angle++;
    }
    if (keyboard.DOWN()) {
      y++;
    }
    if (keyboard.UP()) {
      y--;
    }
  };

  const draw = () => {
    // context.save();
    context.save();
    context.translate(x, y);
    context.rotate((angle * Math.PI) / 180);

    context.beginPath();
    context.arc(x - defaults.x, y - 20 - defaults.y, 5, 0, 2 * Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(x - defaults.x, y - defaults.y, 20, 0, 2 * Math.PI);
    // context.stroke();

    // context.save();
    context.restore();

    // // context.stroke();
    // // context.beginPath();
    // // console.log(angle)
    // context.rotate(45 * (Math.PI) / 180);
    // context.translate(0, 0);
    // console.log(angle, angle * (Math.PI) / 180)
    // context.restore();

    // context.restore();
    // context.restore();
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
    player1 = Player(50, 50);
  };
  const update = () => {
    player1.update();
  };
  const draw = () => {
    // context.save();
    // context.translate(150,150);
    // context.rotate(90 * (Math.PI) / 180);
    player1.draw();
    // context.restore()
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
