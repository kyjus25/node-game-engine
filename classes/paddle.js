export default class Paddle {

  canvas;
  ctx;
  x;
  player;
  p1y;
  p2y;
  p1vy = 0;
  p2vy = 0;

  constructor(canvas, ctx, ball, player) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ball = ball;
    this.player = player;
    this.p1y = this.canvas.height / 2 - 50;
    this.p2y = this.canvas.height / 2 - 50;

    switch(this.player) {
      case 1:
        this.x = 30;
        break;
      case 2:
        this.x = this.canvas.width - 30;
        break;
    }

    document.addEventListener("keydown", res => {
      switch(res.key) {
        case 'w':
          this.p1vy = -10;
          break;
        case 's':
          this.p1vy = 10;
          break;
      }
    });

    document.addEventListener("keyup", res => {
      this.p1vy = 0;
    });

  }

  update() {
    switch(this.player) {
      case 1:
        this.p1y = this.p1y + this.p1vy;
        break;
      case 2:
        this.p2y = this.ball.y * 0.8;
        break;
    }

    if (this.p1y + 100 >= this.canvas.height) {
      this.p1y = this.canvas.height - 100;
    }

    if (this.p1y <= 0) {
      this.p1y = 0;
    }

    if (this.p2y + 100 >= this.canvas.height) {
      this.p2y = this.canvas.height - 100;
    }

    if (this.p2y <= 0) {
      this.p2y = 0;
    }
  }
  
  draw() {
    this.ctx.fillStyle = 'white';
    switch(this.player) {
      case 1:
        this.ctx.fillRect(this.x, this.p1y, 10, 100);
        break;
      case 2:
        this.ctx.fillRect(this.x, this.p2y, 10, 100);
        break;
    }
  }
}