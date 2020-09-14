import { Game } from "./Game";
import { keyboard } from "./Keyboard";
import { context, canvas } from "./Canvas";

keyboard.init()

window.onload = () => {
  const game = Game();

  (function draw() {
    window.requestAnimationFrame(draw);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.rect(0, 0, 300, 300);
    context.stroke();

    keyboard.update()
    game.update();
    game.draw();
  })();
};
