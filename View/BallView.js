class BallView {

  constructor( ballModel ) {
    this.x = ballModel.x;
    this.y = ballModel.y;
    this.r = ballModel.r;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = 1;
    context.fillStyle = '#ff0000';
    context.strokeStyle = '#000000';
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();
  }




}
