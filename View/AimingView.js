class AimingView {

  constructor(aiming) {
    this.xStart = aiming.xStart;
    this.yStart = aiming.yStart;

    this.xLen = 0;
    this.yLen = 0;
  }

  changeDirection(xLen, yLen) {
    this.xLen = xLen;
    this.yLen = yLen;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = 'rgb(255, 0, 0, 0.5)';
    context.moveTo(this.xStart, this.yStart);
    context.lineTo(this.xLen + this.xStart, this.yLen + this.yStart);
    context.stroke();
    context.closePath();
  }
}
