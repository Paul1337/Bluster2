class GameFieldManager {


  constructor() {
  }

  createGameField() {
    this.gameField = {
      width: 800,
      height: 600
    }
    this.gameFieldCreated(this.gameField);
  }
}
