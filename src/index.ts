window.onload = () => {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  (function draw() {
    window.requestAnimationFrame(draw);

    context.arc(150, 150, 105, 0, Math.PI * 2, false); // Órbita terrestre
    context.stroke();
  })();
};
