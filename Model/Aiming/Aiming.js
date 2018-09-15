class Aiming {

  constructor(xStart, yStart, k) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.k = k;
    this.vector = new Vector(0, 0);

    this.isValid = false;
  }

  updateValidationByY(maxY) {
    if (this.vector.y + this.yStart >= maxY) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }

  getDirection() {
    return { lenX: this.vector.x, lenY: this.vector.y };
  }

  pull(lenA, lenB) {
    var vector2 = new Vector(-lenA, -lenB);
    vector2.times(this.k);
    this.vector.add(vector2);
  }


}
