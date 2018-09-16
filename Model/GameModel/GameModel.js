class GameModel {

  constructor() {
    this.gameFieldManager = new GameFieldManager();
    this.ballManager = new BallManager();
    this.mapManager = new MapManager();
    this.ballAimingManager = new AimingManager();
    this.collider = new Collider();
  }

  init() {
    this.gameFieldManager.createGameField();
    this.ballManager.createBalls(this.gameFieldManager.gameField.width / 2, this.gameFieldManager.gameField.height, BallRadius);

    this.mapManager.generateStartMap();
    this.mapManager.initMapParams();
    this.setCallbacks();

    this.level = 1;
    this.levelIsDefined(this.level, this.ballManager.ballCounter);
  }

  setCallbacks() {
    this.collider.ballCollidedTopWall = ball => ball.spY = -ball.spY;
    this.collider.ballCollidedLeftWall = ball => ball.spX = -ball.spX;
    this.collider.ballCollidedRightWall = ball => ball.spX = -ball.spX;
    this.collider.ballCollidedBottomWall = (ball, index) => {
      this.ballManager.stopBallOnGround(ball, this.gameFieldManager.gameField);
      this.ballManager.checkIfBlustingIsFinished();
      if (!this.ballManager.blusting) {
        this.ballManager.gatherBalls();
        this.levelUp();
      }
    }

    this.collider.ballCollidedBrickBottom = (ball, ballIndex, i, j) => {
      ball.spY = -ball.spY;
      // this.ballManager.moveBall(ballIndex, ball.x, i * BrickHeight + BrickHeight + ball.r);
      this.mapManager.damageOn(i, j);
    }

    this.collider.ballCollidedBrickCeil = (ball, ballIndex, i, j) => {
      ball.spY = -ball.spY;
      this.mapManager.damageOn(i, j);
    }

    this.collider.ballCollidedBrickLeft = (ball, ballIndex, i, j) => {
      ball.spX = -ball.spX;
      this.mapManager.damageOn(i, j);
    }

    this.collider.ballCollidedBrickRight = (ball, ballIndex, i, j) => {
      ball.spX = -ball.spX;
      this.mapManager.damageOn(i, j);
    }
  }

  levelUp() {
    if (this.mapManager.notLost()) {
      this.level ++;
      this.levelUpdated(this.level);
      this.mapManager.updateDifficulty(this.level);
      this.mapManager.moveMapDown();
      this.mapManager.createNewUpperBricks(this.level);

      if (this.mapManager.destroyedBricks >= 3) {
        let k = Math.floor(this.mapManager.destroyedBricks / 3);
        for (let i = 0; i < k; i ++)
          this.ballManager.addNewBall();
        this.mapManager.destroyedBricks %= 3;
      }

      this.ballManager.addNewBall();
      
    } else {
      this.gameLost();
    }


  }

  tryPullBallAiming(lenA, lenB) {
    if (this.ballAimingManager.aiming !== undefined) {
      this.ballAimingManager.pullAiming(lenA, lenB);
      this.ballAimingManager.updateAimingValidationByY(this.gameFieldManager.gameField.height - BallRadius * 7);
    }
  }

  tryCreateBallAiming() {
    if (!this.ballManager.blusting && this.ballAimingManager.aiming == undefined)
      this.ballAimingManager.createAiming(this.ballManager.balls[0].x, this.ballManager.balls[0].y, 3);
  }

  tryBlustBall() {
    if (this.ballAimingManager.aiming !== undefined) {
      if (this.ballAimingManager.aiming.isValid) {
        var angle = Math.asin(this.ballAimingManager.aiming.vector.x / this.ballAimingManager.aiming.vector.getLength());
        this.ballManager.blustBalls(angle);
      }

      this.ballAimingManager.destroyAiming();
    }
  }

  startLoop() {
    this.update();
  }

  update() {
    this.ballManager.updateBallsPrevPosition();

    this.ballManager.updateBallsPosition();
    this.collider.collide(this.gameFieldManager.gameField, this.ballManager.balls, this.mapManager.map);

    this.onRequested();
    requestAnimationFrame(() => this.update());
  }
}
