class GameView {

  constructor() {

  }

  createBall( ballModel ) {
    this.ballView = new BallView( ballModel );
  }

  drawBall() {
    this.ballView.draw(this.context);
  }

  moveBallView(x, y) {
    this.ballView.moveTo(x, y);
  }

  createCanvas( gameField ) {

    this.canvas = document.createElement('canvas');
    this.canvas.width = gameField.width;
    this.canvas.height = gameField.height;
    this.canvas.style.border = 'solid 3px green';

    this.context = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

  }

  drawBackground() {
    this.context.fillStyle = 'rgb(0, 255, 255)';
    this.context.fillRect(0, 0, this.canvas.getAttribute('width'), this.canvas.getAttribute('height'));
  }

}
