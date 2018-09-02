class Aiming {

  constructor(xStart, yStart, k) {
    this.xStart = xStart;
    this.yStart = yStart;
    this.k = k;
    this.vector = new Vector(0, 0);
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
