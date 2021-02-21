let c = document.getElementById("canvas");
let ctx = c.getContext("2D");

ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.color("red");