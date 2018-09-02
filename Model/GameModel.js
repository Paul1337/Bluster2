class GameModel {

  constructor() {

  }

  init() {
    this.gameField = {
      width: 800,
      height: 700
    }
    this.gameFieldCreated(this.gameField);

    let ballRadius = 4;
    this.ball = new Ball(this.gameField.width / 2, this.gameField.height - ballRadius, ballRadius);
    this.ballCreated(this.ball);
  }

  startLoop() {
    this.update();
  }

  pullBallAiming(lenA, lenB) {
    this.ball.aiming.pull(lenA, lenB);
    this.ballAimingUpdated( this.ball.aiming );
  }

  createBallAiming() {
    this.ball.createAiming(3);
    this.ballAimingCreated( this.ball.aiming );
  }

  blustBall() {
    this.ball.destroyAiming();
    this.ballAimingDestroyed();
  }

  update() {


    if (this.ball.isFlying) {
      this.ball.updatePosition();
      this.ballPositionUpdated(this.ball);
    }


    this.onRequested();

    var self = this;
    requestAnimationFrame(function() {
      self.update();
    });
  }
}
