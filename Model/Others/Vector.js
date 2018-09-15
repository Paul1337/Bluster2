class Vector {

  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vector2) {
    this.x += vector2.x;
    this.y += vector2.y;
    this.z += vector2.z;
  }

  getLength() {
    return Math.sqrt(Math.sqr(this.x) + Math.sqr(this.y) + Math.sqr(this.z));
  }

  times(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
  }

  timesVector(vectorB) {
    return new Vector(this.y * vectorB.z - this.z * vectorB.y, this.z * vectorB.x - this.x * vectorB.z, this.x * vectorB.y - this.y * vectorB.x);
  }


}
