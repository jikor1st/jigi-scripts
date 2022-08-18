import { Rect } from '../draw';

interface AnimateOptions {
  stageWidth: number;
  stageHeight: number;
  moveX: number;
  pointY: number;
}

interface WheelSlideListType {
  id: number | string;
  fillStyle: string;
}

const SIZE = 100;
const ASPECT_RATIO = 1.4;
const RADIUS = 300;

const POS_X = 50;
const POS_Y = 50;

const ROTATE_ACC = 0.008;

class WheelSlider {
  slides: WheelSlideListType[];
  width: number;
  height: number;
  rotate: number;
  radius: number;
  x: number;
  y: number;

  test: number;

  constructor(slideList: WheelSlideListType[]) {
    this.slides = slideList;

    this.width = SIZE;
    this.height = SIZE * ASPECT_RATIO;
    this.radius = RADIUS;

    this.x = 0;
    this.y = 0;
    this.rotate = 0;

    this.test = 0;
  }
  public animate(ctx: CanvasRenderingContext2D, options: AnimateOptions) {
    const { stageWidth, stageHeight, moveX, pointY } = options;
    this.x = stageWidth / (100 / POS_X);
    this.y = stageHeight / (100 / POS_Y);

    const PI2 = Math.PI * 2;
    const angle = PI2 / this.slides.length;

    if (pointY > stageHeight / 2) {
      this.rotate -= moveX * ROTATE_ACC;
    } else {
      this.rotate += moveX * ROTATE_ACC;
    }

    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.rotate(this.rotate);

    for (let i = 0; i < this.slides.length; i++) {
      const item = this.slides[i];

      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);
      const rotate = (((360 / this.slides.length) * i + 90) * Math.PI) / 180;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotate);
      ctx.translate(-this.width / 2, -this.height / 2);
      ctx.beginPath();
      ctx.fillStyle = item.fillStyle;
      ctx.rect(0, 0, this.width, this.height);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotate);
      ctx.translate(-this.width / 2, -this.height / 2);

      ctx.fillStyle = '#000000';
      ctx.font = '25px sans-serif';
      ctx.fillText((i + 1).toString(), 10, 40);

      ctx.restore();
    }
    ctx.restore();
  }

  public show() {}
}

export { WheelSlider };
