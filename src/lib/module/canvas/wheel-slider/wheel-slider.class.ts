import { Rect } from '../draw';

interface InstallOptions {
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  moveX: number;
}

interface CardInform {
  width: number;
  height: number;
}

class WheelSlider {
  slide: Rect[];
  cardInform: CardInform;
  rotate: number;

  constructor() {
    this.slide = [];

    const relativeWidth = 80;
    const ratio = 1.618;
    this.cardInform = {
      width: relativeWidth,
      height: relativeWidth * ratio,
    };
    this.rotate = 0;
    const slideLength = 12;

    for (let i = 0; i < slideLength; i++) {
      this.slide.push(new Rect());
    }
  }
  public install(slides: any, options: InstallOptions) {
    // console.log(1);
    const { ctx, stageWidth, stageHeight, moveX } = options;

    let posX = stageWidth / 2;
    let posY = stageHeight / 2;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, posX, posY);

    this.rotate -= moveX * 0.008;
    // console.log('this.rotate: ', this.rotate);
    ctx.rotate(this.rotate);

    const radius = 200;
    const PI2 = Math.PI * 2;
    const angle = PI2 / this.slide.length;

    for (let i = 0; i < this.slide.length; i++) {
      const item = this.slide[i];
      const x = radius * Math.cos(angle * i);
      const y = radius * Math.sin(angle * i);

      // ctx.translate(x, y);
      // const rotate = this.slide.length * i;
      const rotate = ((360 / this.slide.length) * i * Math.PI) / 180;
      // const radian = Math.atan2(y, x) + Math.PI;
      // const rotate = ((radian / PI2) * 360) % 360;

      // rotate += 360 / this.slide.length;
      item.draw(ctx, {
        save: true,
        x: x,
        y: y,
        width: this.cardInform.width,
        height: this.cardInform.height,
        rotate: rotate,
        fillStyle: '#ff0000',
      });
      ctx.fillStyle = '#000000';
      ctx.font = '20px serif';
      ctx.fillText((i + 1).toString(), x + 10, y + 30);
      ctx.restore();
    }
    ctx.restore();
  }

  public show() {}
}

export { WheelSlider };
