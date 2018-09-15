class ColliderHelper {

  linesCollide(line1, line2) {
    if (this.lineCol1(line1, line2) && this.lineCol2(line1, line2))
      return true;
    return false;
  }

  lineCol1(line1, line2) {
    let lineVec = new Vector(line1.x2 - line1.x1, line1.y2 - line1.y1);
    let vecA = new Vector(line2.x1 - line1.x1, line2.y1 - line1.y1);
    let vecB = new Vector(line2.x2 - line1.x1, line2.y2 - line1.y1);

    if (vecA.timesVector(lineVec).z * vecB.timesVector(lineVec).z < 0) {
      return true;
    }

    return false;
  }

  lineCol2(line1, line2) {
    let lineVec = new Vector(line2.x2 - line2.x1, line2.y2 - line2.y1);
    let vecA = new Vector(line1.x2 - line2.x1, line1.y2 - line2.y1);
    let vecB = new Vector(line1.x1 - line2.x1, line1.y1 - line2.y1);

    if (vecA.timesVector(lineVec).z * vecB.timesVector(lineVec).z < 0) {
      return true;
    }

    return false;
  }
}
