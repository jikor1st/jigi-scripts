import { CanvasStyles } from '@/lib/types';

interface RectDrawOptions extends CanvasStyles {
  x: number;
  y: number;
  width: number;
  height: number;
  rotate?: number;
}

class Rect {
  public property: RectDrawOptions;

  constructor() {
    this.property = {
      save: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotate: 0,
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 0,
      restore: false,
    };
  }

  private saveProperty(property: RectDrawOptions) {
    this.property = property;
  }

  public draw(ctx: CanvasRenderingContext2D, property: RectDrawOptions) {
    const {
      save,
      x,
      y,
      width,
      height,
      rotate,
      fillStyle,
      strokeStyle,
      lineWidth,
      restore,
    } = property ?? {};

    if (save) ctx.save();

    ctx.beginPath();

    if (rotate) ctx.rotate(rotate);
    ctx.rect(x, y, width, height);

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }

    if (lineWidth) ctx.lineWidth = lineWidth;

    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
    }
    ctx.closePath();

    if (restore) ctx.restore();

    this.saveProperty(property);
  }
}

export { Rect };
