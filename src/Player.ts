import { Ship } from "./Navs";
import { context, canvas } from "./Canvas";
import { keys } from "./Keyboard";

export const Player = (position) => {
  var angle = -90,
    angleRad = (angle * Math.PI) / 180,
    velocity = 0,
    ax = 0,
    ay = 0,
    vx = 0,
    vy = 0,
    acelerating = false;

  const update = () => {
    if (keys.LEFT()) {
      angle = angle - 1;
    }
    if (keys.RIGHT()) {
      angle = angle + 1;
    }
    if (keys.UP()) {
      // aceleration++;
      velocity = 1;
      angleRad = (angle * Math.PI) / 180;
      ax += Math.cos(angleRad) * (0.05);
      ay += Math.sin(angleRad) * (0.05);
      vx += ax;
      vy += ay;
      acelerating = true;
    } else {
      acelerating = false;
    }
  };

  const draw = () => {
    if (acelerating) {
      position.x = position.x + vx;
      position.y = position.y + vy;
      // position.y = position.y - 1;
      console.log("position.x", position.x);
      console.log("position.y", position.y);

      // position.x = position.x * Math.cos(angle * Math.PI/180)
    }
    angleRad = (angle * Math.PI) / 180;

    context.save();
    context.translate(position.x, position.y);
    context.rotate(angleRad);

    context.drawImage(
      Ship.src,
      -(Ship.width / 2),
      -(Ship.height / 2),
      Ship.width,
      Ship.height
    );

    context.restore();
  };

  return {
    draw,
    update,
  };
};
