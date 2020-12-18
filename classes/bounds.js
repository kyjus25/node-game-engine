export default class Bounds {
  p1;
  p2;
  score;
  ball;
  canvas;
  ctx;

  constructor(canvas, ctx, score, ball, p1, p2) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = score;
    this.ball = ball;
    this.p1 = p1;
    this.p2 = p2;
  }

  update() {
    if (this.ball.x <= 35 && this.ball.y > this.p1.p1y - 20 && this.ball.y < this.p1.p1y + 100) {
      this.ball.vx = this.ball.vx * -1;
    }

    if (this.ball.x >= this.canvas.width - 40 && this.ball.y > this.p2.p2y - 20 && this.ball.y < this.p2.p2y + 100) {
      this.ball.vx = this.ball.vx * -1;
    }

    // Score 1 for P1
    if (this.ball.x + 20 >= this.canvas.width) {
      // this.vx = this.vx * -1;
      this.ball.reset();
      this.score.updateP1();
    }

    // Score 1 for P2
    if (this.ball.x <= 0) {
      // this.vx = this.vx * -1;
      this.ball.reset();
      this.score.updateP2();
    }
  }
  
  draw() {}
}