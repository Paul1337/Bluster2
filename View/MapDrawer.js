class MapDrawer {

  constructor(brickWidth, brickHeight) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
  }

  setMaxMapHealth(maxhealth) {
    this.maxMapHealth = maxhealth;
  }

  setMinMapHealth(minhealth) {
    this.minMapHealth = minhealth;
  }

  drawMap(map, context) {

    map.forEach((row, i) => {
      row.forEach((el, j) => {
        if (el > 0) {
          this.drawBrick(j * this.brickWidth, i * this.brickHeight, this.brickWidth, this.brickHeight, el, context);
        }
      });
    });

  }

  drawBrick(x, y, w, h, life, context) {
    context.beginPath();
    let r = (life - this.minMapHealth) / (this.maxMapHealth - this.minMapHealth) * 255;
    let g = 255 - (life - this.maxMapHealth / 10 - this.minMapHealth) / (this.maxMapHealth - this.minMapHealth) * 255;
    let b = 0;
    context.lineWidth = 1;
    context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    context.strokeStyle = '#000000';
    context.fillRect(x, y, w, h);
    context.strokeRect(x, y, w, h);
    context.stroke();
    context.fillStyle = '#000000';
    context.font = '15px Areal';
    context.fillText(life, x + this.brickWidth * 0.35, y + this.brickHeight * 0.75);
    context.closePath();
  }

}
