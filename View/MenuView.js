class MenuView {


  constructor(level, balls) {
    this.setLevel(level);
    this.setBalls(balls);
  }

  setLevel(level) {
    this.level = level;
  }

  setBalls(balls) {
    this.balls = balls;
  }

  draw(context, field) {
    context.beginPath();
    context.lineWidth = 3;
    context.moveTo(0, 25);
    context.lineTo(field.width, 25);
    context.stroke();
    context.fillStyle = 'rgb(200, 200, 0)';
    context.fillRect(0, 0, field.width, 25);
    context.fillStyle = '#000000';
    context.font = '22px Areal';
    context.fillText("Уровень: " + this.level, 10, 20);
    context.fillText("Шары: " + this.balls, field.width - 120, 20);
    context.closePath();

  }
}
