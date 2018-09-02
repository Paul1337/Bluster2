class Controller {

  constructor(model) {
    this.model = model;
    this.gameView = new GameView();

    var self = this;
    this.model.gameFieldCreated = function(gameField) {
      self.gameView.createCanvas(gameField);
    }

    this.model.ballCreated = function( ball ) {
      self.gameView.createBall( ball );
    }

    this.model.onRequested = function() {
      self.gameView.drawBackground();
      self.gameView.drawBall();
    }

    this.model.ballPositionUpdated = function(ball) {
      self.gameView.moveBallView( ball.x, ball.y );
    }


    this.model.init();
    this.model.startLoop();
  }
}
