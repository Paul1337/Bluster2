class AimingView {

  constructor(aiming) {
    this.xStart = aiming.xStart;
    this.yStart = aiming.yStart;

    this.xLen = 0;
    this.yLen = 0;

    this.isValid = false;
  }

  setDirection(xLen, yLen) {
    this.xLen = xLen;
    this.yLen = yLen;
  }

  setValidation(isValid) {
    this.isValid = isValid;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'rgb(255, 0, 0, 0.7)';
    context.moveTo(this.xStart, this.yStart);
    context.lineTo(this.xLen + this.xStart, this.yLen + this.yStart);
    context.stroke();
    context.closePath();
  }
}
