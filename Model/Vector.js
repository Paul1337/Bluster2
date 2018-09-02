class Vector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector2) {
    this.x += vector2.x;
    this.y += vector2.y;
  }

  times(n) {
    this.x *= n;
    this.y *= n;
  }
  

}
