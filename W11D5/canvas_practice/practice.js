document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext('2d');
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(150, 150, 300, 200, 2 * Math.PI, true);
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();

});
