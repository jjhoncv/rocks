import { Player } from "./Player";
import { Position } from "./Position";
import { Ship } from "./Navs";

import { canvas } from "./Canvas";

export const Game = () => {
  var player = Player(Position(canvas.width / 2  , canvas.height - Ship.height));

  const update = () => {
    player.update();
  };
  const draw = () => {
    player.draw();
  };

  return {
    draw,
    update,
  };
};
