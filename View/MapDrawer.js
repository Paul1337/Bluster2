class MapDrawer {

  constructor(brickWidth, brickHeight) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
  }

  drawMap(map, context) {

    map.forEach( (row, i) => {
      row.forEach( (el, j) => {
        if (el > 0) {
          this.drawBrick(j * this.brickWidth, i * this.brickHeight, this.brickWidth, this.brickHeight, el, context);
        }
      });
    });

  }

  drawBrick(x, y, w, h, life, context) {
    context.fillStyle = '#00ff00';
    context.strokeStyle = '#000000';
    context.fillRect(x, y, w, h);
    context.strokeRect(x, y, w, h);
    context.stroke();
    context.fillStyle = '#000000';
    context.font = '15px Areal';
    context.fillText(life, x + this.brickWidth * 0.35, y + this.brickHeight * 0.75);
  }

}
