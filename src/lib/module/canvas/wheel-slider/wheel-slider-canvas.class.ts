import { Rect } from '../draw';
import { utility } from '@/lib/utils';

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

const SIZE = 200;
const ASPECT_RATIO = 1.4;

const POS_X = 50;
const POS_Y = 0;

const ROTATE_DESCEL = 0.01;

class WheelSliderCanvas {
  slides: WheelSlideListType[];
  width: number;
  height: number;
  rotate: number;
  radius: number;

  stageWidth: number;
  stageHeight: number;

  x: number;
  y: number;
  stageX: number;
  stageY: number;

  constructor(slideList: WheelSlideListType[]) {
    this.slides = slideList;

    this.width = SIZE;
    this.height = SIZE * ASPECT_RATIO;
    this.radius = 0;

    this.stageWidth = 0;
    this.stageHeight = 0;
    this.x = 0;
    this.y = 0;

    this.stageX = POS_X;
    this.stageY = POS_Y;

    this.rotate = 0;
  }
  public animate(ctx: CanvasRenderingContext2D, options: AnimateOptions) {
    const { stageWidth, stageHeight, moveX, pointY } = options;

    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.radius = (this.slides.length * this.width) / Math.PI / 2;
    console.log('this.radius: ', this.radius);
    // min-width
    // console.log('this', stageHeight, this.height, this.radius);
    if (this.stageHeight < this.height + this.radius / 2) {
      console.log('over');
    }
    // min-height

    this.x = this.stageWidth / (100 / this.stageX);
    this.y = this.stageHeight + this.radius - this.height;
    // this.y = this.stageHeight / (100 / this.stageY) + this.radius;

    const PI2 = Math.PI * 2;
    const angle = PI2 / this.slides.length;

    if (pointY > this.x) {
      this.rotate -= moveX * ROTATE_DESCEL;
    } else {
      this.rotate += moveX * ROTATE_DESCEL;
    }

    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.rotate(this.rotate);

    for (let i = 0; i < this.slides.length; i++) {
      const item = this.slides[i];

      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);
      const rotate = (((360 / this.slides.length) * i + 90) * Math.PI) / 180;

      // box
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotate);
      ctx.translate(-this.width / 2, -this.height / 2);
      ctx.beginPath();
      ctx.fillStyle = item.fillStyle;
      ctx.rect(0, 0, this.width, this.height);
      ctx.fill();

      ctx.restore();

      // text
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotate);
      ctx.translate(-this.width / 2, -this.height / 2);

      ctx.fillStyle = utility.getInvertColor(item.fillStyle);
      ctx.font = '25px sans-serif';
      ctx.fillText((i + 1).toString(), 15, 40);

      ctx.restore();
    }
    ctx.restore();
  }

  public show() {}
}

export { WheelSliderCanvas };
