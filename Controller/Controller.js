class Controller {

  constructor(model) {
    this.model = model;
    this.gameView = new GameView();

    var self = this;
    this.model.gameFieldCreated = function(gameField) {
      self.gameView.createCanvas(gameField);
      self.gameView.drawBackground();
    }

    this.model.ballCreated = function( ball ) {
      self.gameView.createBall( ball );
    }



    this.model.init();

  }
}
