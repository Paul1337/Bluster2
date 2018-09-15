class BallManager {


  constructor() {
    this.ballCounter = 5;
    this.blusting = false;
    this.balls = [];
  }

  stopBallOnGround(ball, field) {
    ball.stop();
    ball.y = field.height - ball.r;
  }

  updateBallsPrevPosition() {
    this.balls.forEach(ball => ball.updatePrevPosition());
  }

  noBallsAreFlying() {
    for (let i = 0; i < this.balls.length; i ++) {
      if (this.balls[i].isFlying) {
        return false;
      }
    }

    return true;
  }

  checkIfBlustingIsFinished() {
    if (this.noBallsAreFlying()) {
      this.blusting = false;
    }
  }

  gatherBalls() {
    let mutualPos = this.balls[0].x;

    this.balls.forEach( (ball, ballIndex) => {
      ball.x = mutualPos;
      this.ballPositionUpdated(ballIndex, ball);
    });
  }

  createBalls(x, y, ballRadius) {
    for (var i = 0; i < this.ballCounter; i++) {
      let newBall = new Ball(x, y - ballRadius, ballRadius);
      this.balls.push(newBall);
      this.ballCreated(newBall);
    }

  }

  updateBallsPosition() {
    for (var i = 0; i < this.balls.length; i++) {
      if (this.balls[i].isFlying) {
        this.balls[i].updatePosition();
        this.ballPositionUpdated(i, this.balls[i]);
      }
    }
  }

  blustBall(index, angle) {
    this.balls[index].blust(angle);
    if (index > 0)
      setTimeout(() => this.blustBall(index - 1, angle), 50);
  }

  blustBalls(angle) {
    this.blusting = true;
    this.blustBall(this.balls.length - 1, angle);
  }
}
