class GameModel {

  constructor() {
  }

  init() {
    this.gameField = {
      width: 500,
      height: 500
    }
    this.gameFieldCreated(this.gameField);

    let ballRadius = 4;
    this.ball = new Ball(this.gameField.width / 2, this.gameField.height - ballRadius, ballRadius);
    this.ballCreated(this.ball);

  }

  startLoop() {
    this.update();
  }

  update() {


    if (this.ball.isFlying) {
      this.ball.updatePosition();
      this.ballPositionUpdated( this.ball );
    }


    this.onRequested();

    var self = this;
    requestAnimationFrame(function() {
      self.update();
    });
  }
}
