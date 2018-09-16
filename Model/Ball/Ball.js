class Ball {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.spX = 0;
    this.spY = 0;
    this.sp = 8;

    this.prevX = x;
    this.prevY = y;

    this.isFlying = false;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  stop() {
    this.isFlying = false;
    this.spX = 0;
    this.spY = 0;
  }

  updatePosition() {
    this.x += this.spX;
    this.y += this.spY;
  }

  updatePrevPosition() {
    this.prevX = this.x;
    this.prevY = this.y;
  }

  blust(angle) {
    this.isFlying = true;
    this.spX = Math.sin(angle) * this.sp;
    this.spY = -Math.cos(angle) * this.sp;
  }

}
