class Controller {

  constructor(model) {
    this.model = model;
    this.gameView = new GameView();

    var self = this;
    this.model.gameFieldCreated = function(gameField) {
      self.gameView.createCanvas(gameField);
      self.gameView.createEventManager();
      self.gameView.eventManager.mouseIsDragging = function(e) {
        self.model.pullBallAiming(e.movementX, e.movementY);
      }
      self.gameView.eventManager.mouseIsDown = function(e) {
        //e.offsetX, e.offsetY
        self.model.createBallAiming();
      }
      self.gameView.eventManager.mouseIsUp = function(e) {
        self.model.blustBall();
      }
    }

    this.model.ballCreated = function(ball) {
      self.gameView.createBall(ball);
    }

    this.model.onRequested = function() {
      self.gameView.drawBackground();
      self.gameView.drawBall();
      if (self.gameView.aimingView !== undefined) self.gameView.drawAiming();
    }

    this.model.ballPositionUpdated = function(ball) {
      self.gameView.moveBallView(ball.x, ball.y);
    }

    this.model.ballAimingCreated = function(aiming) {
      self.gameView.createAimingView(aiming);
    }

    this.model.ballAimingDestroyed = function() {
      self.gameView.destroyAimingView();
    }

    this.model.ballAimingUpdated = function(aiming) {
      self.gameView.changeBallAimingDirection(aiming);
    }

    this.model.init();
    this.model.startLoop();
  }
}
