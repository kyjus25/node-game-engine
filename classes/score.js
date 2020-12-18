export default class Score {

  s1 = 0;
  s2 = 0;

  constructor(ctx) {
    this.ctx = ctx;
  }

  updateP1() {
    this.s1++;
  }

  updateP2() {
    this.s2++;
  }
  
  draw() {
    this.ctx.font = '25px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(this.s1 + ' - ' + this.s2, canvas.width - 60, 30);
  }
}