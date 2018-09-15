class Controller {

  constructor(model) {
    this.model = model;
    this.gameView = new GameView();

    this.model.gameFieldManager.gameFieldCreated = gameField => {
      this.gameView.createCanvas(gameField);
      this.gameView.createEventManager();
      this.gameView.eventManager.mouseIsDragging = e => this.model.tryPullBallAiming(e.movementX, e.movementY);
      this.gameView.eventManager.mouseIsDown = e => this.model.tryCreateBallAiming();
      this.gameView.eventManager.mouseIsUp = e => this.model.tryBlustBall();
    }

    this.model.ballManager.ballCreated = ball => this.gameView.createBall(ball);

    this.model.onRequested = () => {
      this.gameView.drawBackground();
      this.gameView.drawBalls();
      this.gameView.drawMap(this.model.mapManager.map);
      if (this.gameView.aimingView !== undefined) this.gameView.tryDrawAiming();
    }

    this.model.ballManager.ballPositionUpdated = (index, ball) => this.gameView.moveBallView(index, ball.x, ball.y);

    this.model.ballAimingManager.aimingCreated = aiming => this.gameView.createAimingView(aiming);
    this.model.ballAimingManager.aimingDestroyed = () => this.gameView.destroyAimingView();
    this.model.ballAimingManager.aimingPulled = aiming => this.gameView.updateBallAimingDirection(aiming.getDirection());
    this.model.ballAimingManager.aimingValidationUpdated = validation => this.gameView.updateBallAimingValidation(validation);

    this.model.mapManager.mapGenerated = () => this.gameView.createMapDrawer( BrickWidth, BrickHeight );


    this.model.init();
    this.model.startLoop();
  }
}
