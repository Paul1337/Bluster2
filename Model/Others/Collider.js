class Collider {

  constructor() {
    this.helper = new ColliderHelper();
  }

  collide(field, balls, map) {
    balls.forEach((ball, ballIndex) => {
      if (this.ballCollidesTopWall(ball))
        this.ballCollidedTopWall(ball);
      else if (this.ballCollidesBottomWall(ball, field))
        this.ballCollidedBottomWall(ball, ballIndex);

      if (this.ballCollidesLeftWall(ball))
        this.ballCollidedLeftWall(ball);
      else if (this.ballCollidesRightWall(ball, field))
        this.ballCollidedRightWall(ball);

      if (ball.isFlying)
        map.forEach((row, i) => {
          row.forEach((mapEl, j) => {
            if (mapEl !== 0) {
              let brick = {
                x: j * BrickWidth,
                y: i * BrickHeight,
                w: BrickWidth,
                h: BrickHeight
              }
              if (this.ballCollidesBrickBottom(ball, brick)) {
                this.ballCollidedBrickBottom(ball, i, j);
              }


            }
          });

        });


    });



  }

  ballCollidesRightWall(ball, field) {

    if (ball.x + ball.r >= field.width && ball.isFlying)
      return true;

    return false;
  }

  ballCollidesLeftWall(ball) {

    if (ball.x - ball.r <= 0 && ball.isFlying)
      return true;

    return false;
  }

  ballCollidesTopWall(ball) {

    if (ball.y - ball.r <= 0 && ball.isFlying)
      return true;

    return false;
  }

  ballCollidesBottomWall(ball, field) {

    if (ball.y + ball.r >= field.height && ball.isFlying)
      return true;

    return false;
  }

  ballCollidesBrickBottom(ball, brick) {
    let line1 = {
      x1: ball.prevX,
      y1: ball.prevY,
      x2: ball.x,
      y2: ball.y
    }
    let line2 = {
      x1: brick.x,
      y1: brick.y + brick.h,
      x2: brick.x + brick.w,
      y2: brick.y + brick.h
    }

    return this.helper.linesCollide(line1, line2) && (ball.spY < 0);
  }

  ballCollidesBrickCeil(ball, brick) {

  }

  ballCollidesBrickLeft(ball, brick) {


  }

  ballCollidesBrickRight(ball, brick) {

  }


  // ballCollidesBrick(ball, brick) {
  //
  //   if (ball.x + ball.r >= brick.x && ball.x - ball.r <= brick.x + brick.w && ball.y - ball.r <= brick.y + brick.h && ball.y + ball.r >= brick.y) {
  //     return true;
  //   }
  //   // if (ball.x + ball.r >= brick.x && ball.x - ball.r <= brick.x + brick.w) {
  //   //   return  true;
  //   // }
  //
  //   return false;
  // }


}
