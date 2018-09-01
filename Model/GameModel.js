class GameModel {

  constructor() {
  }

  init() {
    this.gameField = {
      width: 500,
      height: 500
    }
    this.gameFieldCreated(this.gameField);

    var ballRadius = 4;
    this.ball = new Ball(this.gameField.width / 2, this.gameField.height - ballRadius, ballRadius);
    this.ballCreated(this.ball);
  }

  startLoop() {
    this.update();
  }

  update() {



    var self = this;
    requestAnimationFrame(function() {
      self.update();
    });
  }
}
