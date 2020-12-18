export default class FPS {

  secondsPassed;
  oldTimeStamp;
  ctx
  fps;

  constructor(ctx) {
    this.ctx = ctx;
  }

  update(ts) {
    this.secondsPassed = (ts - this.oldTimeStamp) / 1000;
    this.oldTimeStamp = ts;
    this.fps = Math.round(1 / this.secondsPassed);
  }
  
  draw() {
    this.ctx.font = '25px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("FPS: " + this.fps, 10, 30);
  }
}