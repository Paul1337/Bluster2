class Ball {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.spX = 0;
    this.spY = 0;
    this.sp = 5;

    this.isFlying = false;
  }

  updatePosition() {
    this.x += this.spX;
    this.y += this.spY;
  }

  blust(angle) {
    this.isFlying = true;

    this.spX = Math.sin(angle) * this.sp;
    this.spY = -Math.cos(angle) * this.sp;
  }

}
