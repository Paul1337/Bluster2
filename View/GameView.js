class GameView {

  constructor() {
  }

  createEventManager() {
    this.eventManager = new EventManager( this.canvas );
  }

  createBall(ballModel) {
    this.ballView = new BallView(ballModel);
  }

  drawAiming() {
    this.aimingView.draw(this.context);
  }

  changeBallAimingDirection(aiming) {
    var direction = aiming.getDirection();
    this.aimingView.changeDirection(direction.lenX, direction.lenY);
  }

  drawBall() {
    this.ballView.draw(this.context);
  }

  moveBallView(x, y) {
    this.ballView.moveTo(x, y);
  }

  createAimingView(aiming) {
    this.aimingView = new AimingView(aiming);
  }

  destroyAimingView() {
    this.aimingView = undefined;
  }

  createCanvas(gameField) {

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
