import Ball from './classes/ball.js';
import FPS from './classes/fps.js';
import Paddle from './classes/paddle.js';
import Score from './classes/score.js';
import Bounds from './classes/bounds.js';

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');

const fps = new FPS(ctx);
const score = new Score(ctx);
const ball = new Ball(canvas, ctx, score);
const p1 = new Paddle(canvas, ctx, ball, 1);
const p2 = new Paddle(canvas, ctx, ball, 2);
const bounds = new Bounds(canvas, ctx, score, ball, p1, p2);


window.requestAnimationFrame(gameLoop);

function gameLoop(ts) {
  update(ts);
  draw();
  window.requestAnimationFrame(gameLoop);
}

function update(ts) {
  fps.update(ts);
  p1.update();
  p2.update();
  ball.update();
  bounds.update();
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect('0', '0', canvas.width, canvas.height);

  fps.draw();
  score.draw();
  ball.draw();
  p1.draw();
  p2.draw();
}

