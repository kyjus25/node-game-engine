export default class Ball {
  p1;
  p2;
  score;
  canvas;
  ctx;
  x;
  y;
  vx;
  vy;

  constructor(canvas, ctx, score, p1, p2) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = score;
    this.p1 = p1;
    this.p2 = p2;

    this.reset();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  reset() {
    this.x = this.canvas.width / 2 - 10;
    this.y = this.canvas.height / 2 - 10;
    const polX = Math.random() < 0.5 ? -1 : 1;
    const polY = Math.random() < 0.5 ? -1 : 1;
    this.vx = this.getRandomInt(3, 8) * polX;
    this.vy = this.getRandomInt(3, 6) * polY;
    // this.vx = 7;
    // this.vy = 0;
  }

  update() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y + 20 >= this.canvas.height) {
      this.vy = this.vy * -1
    }

    if (this.y <= 0) {
      this.vy = this.vy * -1
    }
  }
  
  draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x, this.y, 20, 20);
  }
}