import { context } from "./Canvas";
import { keys } from "./Keyboard"

export const Bullet = (x, y) => {
  var y = y;
  var x = x;

  const update = () => {
    if (keys.SPACE()) {
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
