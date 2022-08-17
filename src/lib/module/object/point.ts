type PointType = { x: number; y: number };

class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(point: PointType) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }

  subtract(point: PointType) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
  }

  reduce(value: number) {
    this.x *= value;
    this.y *= value;
    return this;
  }

  collide(point: PointType, width: number, height: number) {
    if (
      this.x >= point.x &&
      this.x <= point.x + width &&
      this.y >= point.y &&
      this.y <= point.y + height
    ) {
      return true;
    } else {
      return false;
    }
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

export { Point };
