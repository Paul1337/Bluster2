class GameView {

  constructor() {
    this.ballViews = [];
  }

  createMenuView(level, balls) {
    this.menuView = new MenuView(level, balls);
  }

  createEventManager() {
    this.eventManager = new EventManager( document );
  }

  lose() {
    this.canvas.style.display = 'none';

    let message = document.createElement('h3');
    message.innerHTML = 'Вы проиграли!';
    message.style = 'color: red; font-size: 50px; text-align: center;';
    document.body.appendChild(message);

  }

  createBall(ball) {
    this.ballViews.push(new BallView(ball));
  }

  drawMenu(field) {
    this.menuView.draw(this.context, field);
  }

  createMapDrawer(brickWidth, brickHeight) {
    this.mapDrawer = new MapDrawer(brickWidth, brickHeight);
  }

  drawMap(map) {
    this.mapDrawer.drawMap(map, this.context);
  }

  tryDrawAiming() {
    if (this.aimingView.isValid)
      this.aimingView.draw(this.context);
  }

  updateBallAimingDirection(direction) {
    this.aimingView.setDirection(direction.lenX, direction.lenY);
  }

  updateBallAimingValidation(isValid) {
    this.aimingView.setValidation(isValid);
  }

  drawBalls() {
    this.ballViews.forEach(ballView => ballView.draw(this.context));
  }

  moveBallView(index, x, y) {
    this.ballViews[index].moveTo(x, y);
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
    this.context.webkitImageSmoothingEnabled=true;

    document.body.appendChild(this.canvas);

  }

  drawBackground() {
    this.context.fillStyle = 'rgb(0, 255, 255)';
    this.context.fillRect(0, 0, this.canvas.getAttribute('width'), this.canvas.getAttribute('height'));



  }

}
